using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

using System.Text.RegularExpressions;
using System.IO;
using System.IO.Compression;
using System.Net;
using CodePlexNewReleaseChecker;

namespace TSUIUpdater
{
    public partial class MainForm : Form
    {
        Release defaultRelease = null;

        FolderBrowserDialog folderDlg = new FolderBrowserDialog()
        {
            Description = "Select project folder",
            ShowNewFolderButton = true,
            RootFolder = Environment.SpecialFolder.MyComputer
        };
        OpenFileDialog openFileDlg = new OpenFileDialog()
        {
            AddExtension = false,
            CheckFileExists = true,
            CheckPathExists = true,
            DefaultExt = ".zip",
            Filter = "*.zip (*.zip)|*.zip",
            Multiselect = false,
            RestoreDirectory = true,
            Title = "Open release zip file..."
        };

        public MainForm()
        {
            InitializeComponent();
        }

        private void MainForm_Load(object sender, EventArgs e)
        {
            LoadDefaultRelease();
        }
        private void LoadDefaultRelease()
        {
            VersionChecker vcReleasedPageStripper = new VersionChecker("typescriptui", new ReleasedStripper());
            defaultRelease = vcReleasedPageStripper.GetDefaultRelease();
            MessageBox.Show("The latest recommended release is " + defaultRelease.Name);
        }
        //private void LoadAllReleases()
        //{
        //    VersionChecker vcReleasedPageStripper = new VersionChecker("typescriptui", new ReleasedStripper());
        //    var releases = vcReleasedPageStripper.GetReleases();
        //    releases = releases.Where(x => x.DevelopmentStatus != "Planning").OrderByDescending(x => x.ReleaseID);
        //    ReleaseZipBox.Items.Clear();
        //    foreach (Release aRelease in releases)
        //    {
        //        ReleaseZipBox.Items.Add(aRelease);
        //    }
        //}

        private void DestBrowseButton_Click(object sender, EventArgs e)
        {
            if (folderDlg.ShowDialog() == System.Windows.Forms.DialogResult.OK)
            {
                DestFolderBox.Text = folderDlg.SelectedPath;
            }
        }
        private void ReleaseBrowseButton_Click(object sender, EventArgs e)
        {
            if (openFileDlg.ShowDialog() == System.Windows.Forms.DialogResult.OK)
            {
                ReleaseZipBox.Text = openFileDlg.FileName;
            }
        }

        private void CreateButton_Click(object sender, EventArgs e)
        {
            CreateProject(DestFolderBox.Text, ReleaseZipBox.Text);
        }
        private void UpdateButton_Click(object sender, EventArgs e)
        {
            UpdateProject(DestFolderBox.Text, ReleaseZipBox.Text);
        }

        private void CreateProject(string dest, string zipPath)
        {
            UpdateProject(dest, zipPath, false);
        }
        private void UpdateProject(string dest, string zipPath, bool UpdateLibOnly = true)
        {
            bool OK = false;

            try
            {
                if (File.Exists(zipPath))
                {
                    FileInfo zipInfo = new FileInfo(zipPath);
                    string zipName = zipInfo.Name.Replace(zipInfo.Extension, "");
                    string unzipPath = Path.Combine(dest, zipName);
                    //Empty the directory
                    if (Directory.Exists(unzipPath))
                    {
                        Directory.Delete(unzipPath, true);
                    }
                    Directory.CreateDirectory(unzipPath);
                    ZipFile.ExtractToDirectory(zipPath, unzipPath);

                    try
                    {
                        string[] excludeDirs = new string[] {
                            "Apps"
                        };
                        string[] excludeFiles = new string[] {
                            "MyApp"
                        };

                        string sourcePath = Path.Combine(unzipPath, zipName.Split(' ').Last());
                        string[] sourceDirs = Directory.GetDirectories(sourcePath, "*", SearchOption.AllDirectories);

                        if (UpdateLibOnly)
                        {
                            sourceDirs = sourceDirs.Where(delegate(string x)
                            {
                                bool NameOK = true;

                                foreach (string excludeDir in excludeDirs)
                                {
                                    NameOK = NameOK && !x.Contains("\\" + excludeDir + "\\")
                                                    && x.Split('\\').Last() != excludeDir;
                                    if (!NameOK)
                                    {
                                        break;
                                    }
                                }

                                return NameOK;
                            }).ToArray();
                        }

                        foreach (string dirPath in sourceDirs)
                        {
                            string destDirPath = dirPath.Replace(sourcePath, dest);
                            if (!Directory.Exists(destDirPath))
                            {
                                Directory.CreateDirectory(destDirPath);
                            }
                        }

                        bool copiedFiles = true;
                        string[] sourceFiles = Directory.GetFiles(sourcePath, "*.*", SearchOption.AllDirectories);
                        
                        if (UpdateLibOnly)
                        {
                            sourceFiles = sourceFiles.Where(delegate(string x)
                            {
                                bool NameOK = true;

                                foreach (string excludeDir in excludeDirs)
                                {
                                    NameOK = NameOK && !x.Contains("\\" + excludeDir + "\\")
                                                    && x.Split('\\').Last() != excludeDir;
                                    if (!NameOK)
                                    {
                                        break;
                                    }
                                }
                                foreach (string excludeFile in excludeFiles)
                                {
                                    NameOK = NameOK && !x.Split('\\').Last().Contains(excludeFile);
                                    if (!NameOK)
                                    {
                                        break;
                                    }
                                }

                                return NameOK;
                            }).ToArray();
                        }

                        foreach (string newPath in sourceFiles)
                        {
                            try
                            {
                                File.Copy(newPath, newPath.Replace(sourcePath, dest), true);
                            }
                            catch (Exception ex)
                            {
                                if (MessageBox.Show("Failed to copy file! Do you wish to continue?\r\n\r\nError message: " + ex.Message, "Continue?", MessageBoxButtons.YesNo) == System.Windows.Forms.DialogResult.No)
                                {
                                    copiedFiles = false;
                                    break;
                                }
                            }
                        }

                        try
                        {
                            Directory.Delete(unzipPath, true);
                        }
                        catch (Exception ex)
                        {
                            MessageBox.Show("Failed to delete temporary unzip directory! Error message: " + ex.Message);
                        }

                        if (copiedFiles)
                        {
                            OK = true;
                        }
                    }
                    catch (Exception ex)
                    {
                        MessageBox.Show("Failed to copy new files! Error message: " + ex.Message);
                    }
                }
                else
                {
                    MessageBox.Show("Could not find release zip file!");
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Failed to unzip release! Error message: " + ex.Message);
            }

            if (!OK)
            {
                MessageBox.Show("Update failed!");
            }
            else
            {
                MessageBox.Show("Update succeeded.");
            }
        }
    }
}
