namespace TSUIUpdater
{
    partial class MainForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.label1 = new System.Windows.Forms.Label();
            this.DestFolderBox = new System.Windows.Forms.TextBox();
            this.DestBrowseButton = new System.Windows.Forms.Button();
            this.label2 = new System.Windows.Forms.Label();
            this.UpdateButton = new System.Windows.Forms.Button();
            this.CreateButton = new System.Windows.Forms.Button();
            this.ReleaseBrowseButton = new System.Windows.Forms.Button();
            this.ReleaseZipBox = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(13, 13);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(92, 13);
            this.label1.TabIndex = 0;
            this.label1.Text = "Destination folder:";
            // 
            // DestFolderBox
            // 
            this.DestFolderBox.Location = new System.Drawing.Point(16, 30);
            this.DestFolderBox.Name = "DestFolderBox";
            this.DestFolderBox.Size = new System.Drawing.Size(488, 20);
            this.DestFolderBox.TabIndex = 1;
            this.DestFolderBox.Text = "G:\\Coding\\TypeScript\\TSUI Testing";
            // 
            // DestBrowseButton
            // 
            this.DestBrowseButton.Location = new System.Drawing.Point(510, 28);
            this.DestBrowseButton.Name = "DestBrowseButton";
            this.DestBrowseButton.Size = new System.Drawing.Size(75, 23);
            this.DestBrowseButton.TabIndex = 2;
            this.DestBrowseButton.Text = "Browse";
            this.DestBrowseButton.UseVisualStyleBackColor = true;
            this.DestBrowseButton.Click += new System.EventHandler(this.DestBrowseButton_Click);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(13, 57);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(81, 13);
            this.label2.TabIndex = 3;
            this.label2.Text = "Release zip file:";
            // 
            // UpdateButton
            // 
            this.UpdateButton.Location = new System.Drawing.Point(510, 123);
            this.UpdateButton.Name = "UpdateButton";
            this.UpdateButton.Size = new System.Drawing.Size(75, 23);
            this.UpdateButton.TabIndex = 6;
            this.UpdateButton.Text = "Update";
            this.UpdateButton.UseVisualStyleBackColor = true;
            this.UpdateButton.Click += new System.EventHandler(this.UpdateButton_Click);
            // 
            // CreateButton
            // 
            this.CreateButton.Location = new System.Drawing.Point(429, 123);
            this.CreateButton.Name = "CreateButton";
            this.CreateButton.Size = new System.Drawing.Size(75, 23);
            this.CreateButton.TabIndex = 7;
            this.CreateButton.Text = "Create";
            this.CreateButton.UseVisualStyleBackColor = true;
            this.CreateButton.Click += new System.EventHandler(this.CreateButton_Click);
            // 
            // ReleaseBrowseButton
            // 
            this.ReleaseBrowseButton.Location = new System.Drawing.Point(510, 71);
            this.ReleaseBrowseButton.Name = "ReleaseBrowseButton";
            this.ReleaseBrowseButton.Size = new System.Drawing.Size(75, 23);
            this.ReleaseBrowseButton.TabIndex = 9;
            this.ReleaseBrowseButton.Text = "Browse";
            this.ReleaseBrowseButton.UseVisualStyleBackColor = true;
            this.ReleaseBrowseButton.Click += new System.EventHandler(this.ReleaseBrowseButton_Click);
            // 
            // ReleaseZipBox
            // 
            this.ReleaseZipBox.Location = new System.Drawing.Point(16, 73);
            this.ReleaseZipBox.Name = "ReleaseZipBox";
            this.ReleaseZipBox.Size = new System.Drawing.Size(488, 20);
            this.ReleaseZipBox.TabIndex = 8;
            this.ReleaseZipBox.Text = "G:\\Coding\\TypeScript\\TypeScript UI\\Main\\Releases\\Typescript UI 1.0.2.zip";
            // 
            // MainForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(597, 158);
            this.Controls.Add(this.ReleaseBrowseButton);
            this.Controls.Add(this.ReleaseZipBox);
            this.Controls.Add(this.CreateButton);
            this.Controls.Add(this.UpdateButton);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.DestBrowseButton);
            this.Controls.Add(this.DestFolderBox);
            this.Controls.Add(this.label1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Name = "MainForm";
            this.ShowIcon = false;
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "TSUI Updater";
            this.Load += new System.EventHandler(this.MainForm_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox DestFolderBox;
        private System.Windows.Forms.Button DestBrowseButton;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Button UpdateButton;
        private System.Windows.Forms.Button CreateButton;
        private System.Windows.Forms.Button ReleaseBrowseButton;
        private System.Windows.Forms.TextBox ReleaseZipBox;
    }
}

