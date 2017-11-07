namespace TranslationAid.UI
{
    partial class WikiForm
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
            this.components = new System.ComponentModel.Container();
            this.TheWikiBox = new TranslationAid.UI.WikiTextBox();
            ((System.ComponentModel.ISupportInitialize)(this.TheWikiBox)).BeginInit();
            this.SuspendLayout();
            // 
            // TheWikiBox
            // 
            this.TheWikiBox.AutoScrollMinSize = new System.Drawing.Size(27, 14);
            this.TheWikiBox.BackBrush = null;
            this.TheWikiBox.CharHeight = 14;
            this.TheWikiBox.CharWidth = 8;
            this.TheWikiBox.Cursor = System.Windows.Forms.Cursors.IBeam;
            this.TheWikiBox.DisabledColor = System.Drawing.Color.FromArgb(((int)(((byte)(100)))), ((int)(((byte)(180)))), ((int)(((byte)(180)))), ((int)(((byte)(180)))));
            this.TheWikiBox.Dock = System.Windows.Forms.DockStyle.Fill;
            this.TheWikiBox.Font = new System.Drawing.Font("Courier New", 9.75F);
            this.TheWikiBox.IsReplaceMode = false;
            this.TheWikiBox.Location = new System.Drawing.Point(0, 0);
            this.TheWikiBox.Name = "TheWikiBox";
            this.TheWikiBox.Paddings = new System.Windows.Forms.Padding(0);
            this.TheWikiBox.SelectionColor = System.Drawing.Color.FromArgb(((int)(((byte)(60)))), ((int)(((byte)(0)))), ((int)(((byte)(0)))), ((int)(((byte)(255)))));
            this.TheWikiBox.Size = new System.Drawing.Size(284, 260);
            this.TheWikiBox.TabIndex = 0;
            this.TheWikiBox.Zoom = 100;
            // 
            // WikiForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(284, 260);
            this.Controls.Add(this.TheWikiBox);
            this.Name = "WikiForm";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "WikiForm";
            ((System.ComponentModel.ISupportInitialize)(this.TheWikiBox)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        public WikiTextBox TheWikiBox;

    }
}