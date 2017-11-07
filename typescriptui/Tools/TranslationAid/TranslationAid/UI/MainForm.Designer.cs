namespace TranslationAid.UI
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
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(MainForm));
            this.label1 = new System.Windows.Forms.Label();
            this.EngFileNameBox = new System.Windows.Forms.TextBox();
            this.EngOpenButton = new System.Windows.Forms.Button();
            this.label2 = new System.Windows.Forms.Label();
            this.GeFileNameBox = new System.Windows.Forms.TextBox();
            this.GeOpenButton = new System.Windows.Forms.Button();
            this.SaveAsButton = new System.Windows.Forms.Button();
            this.SaveButton = new System.Windows.Forms.Button();
            this.MainSplitContainer = new System.Windows.Forms.SplitContainer();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.GenerateNewGeButton = new System.Windows.Forms.Button();
            this.SaveEnButton = new System.Windows.Forms.Button();
            this.EngWikiBox = new TranslationAid.UI.WikiTextBox();
            this.GeWikiBox = new TranslationAid.UI.WikiTextBox();
            ((System.ComponentModel.ISupportInitialize)(this.MainSplitContainer)).BeginInit();
            this.MainSplitContainer.Panel1.SuspendLayout();
            this.MainSplitContainer.Panel2.SuspendLayout();
            this.MainSplitContainer.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.EngWikiBox)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.GeWikiBox)).BeginInit();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(12, 15);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(50, 13);
            this.label1.TabIndex = 0;
            this.label1.Text = "English : ";
            this.label1.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // EngFileNameBox
            // 
            this.EngFileNameBox.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.EngFileNameBox.Location = new System.Drawing.Point(68, 12);
            this.EngFileNameBox.Name = "EngFileNameBox";
            this.EngFileNameBox.Size = new System.Drawing.Size(623, 20);
            this.EngFileNameBox.TabIndex = 1;
            this.EngFileNameBox.TextChanged += new System.EventHandler(this.EngFileNameBox_TextChanged);
            // 
            // EngOpenButton
            // 
            this.EngOpenButton.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.EngOpenButton.Location = new System.Drawing.Point(697, 10);
            this.EngOpenButton.Name = "EngOpenButton";
            this.EngOpenButton.Size = new System.Drawing.Size(75, 23);
            this.EngOpenButton.TabIndex = 2;
            this.EngOpenButton.Text = "Open";
            this.EngOpenButton.UseVisualStyleBackColor = true;
            this.EngOpenButton.Click += new System.EventHandler(this.EngOpenButton_Click);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(9, 41);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(53, 13);
            this.label2.TabIndex = 3;
            this.label2.Text = "German : ";
            this.label2.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // GeFileNameBox
            // 
            this.GeFileNameBox.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.GeFileNameBox.Location = new System.Drawing.Point(68, 38);
            this.GeFileNameBox.Name = "GeFileNameBox";
            this.GeFileNameBox.Size = new System.Drawing.Size(623, 20);
            this.GeFileNameBox.TabIndex = 4;
            this.GeFileNameBox.TextChanged += new System.EventHandler(this.GeFileNameBox_TextChanged);
            // 
            // GeOpenButton
            // 
            this.GeOpenButton.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.GeOpenButton.Location = new System.Drawing.Point(697, 36);
            this.GeOpenButton.Name = "GeOpenButton";
            this.GeOpenButton.Size = new System.Drawing.Size(75, 23);
            this.GeOpenButton.TabIndex = 5;
            this.GeOpenButton.Text = "Open";
            this.GeOpenButton.UseVisualStyleBackColor = true;
            this.GeOpenButton.Click += new System.EventHandler(this.GeOpenButton_Click);
            // 
            // SaveAsButton
            // 
            this.SaveAsButton.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Right)));
            this.SaveAsButton.Location = new System.Drawing.Point(298, 424);
            this.SaveAsButton.Name = "SaveAsButton";
            this.SaveAsButton.Size = new System.Drawing.Size(75, 23);
            this.SaveAsButton.TabIndex = 8;
            this.SaveAsButton.Text = "Save As";
            this.SaveAsButton.UseVisualStyleBackColor = true;
            this.SaveAsButton.Click += new System.EventHandler(this.SaveAsButton_Click);
            // 
            // SaveButton
            // 
            this.SaveButton.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Right)));
            this.SaveButton.Location = new System.Drawing.Point(217, 424);
            this.SaveButton.Name = "SaveButton";
            this.SaveButton.Size = new System.Drawing.Size(75, 23);
            this.SaveButton.TabIndex = 7;
            this.SaveButton.Text = "Save";
            this.SaveButton.UseVisualStyleBackColor = true;
            this.SaveButton.Click += new System.EventHandler(this.SaveButton_Click);
            // 
            // MainSplitContainer
            // 
            this.MainSplitContainer.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.MainSplitContainer.Location = new System.Drawing.Point(12, 98);
            this.MainSplitContainer.Name = "MainSplitContainer";
            // 
            // MainSplitContainer.Panel1
            // 
            this.MainSplitContainer.Panel1.Controls.Add(this.SaveEnButton);
            this.MainSplitContainer.Panel1.Controls.Add(this.EngWikiBox);
            this.MainSplitContainer.Panel1.Controls.Add(this.label3);
            // 
            // MainSplitContainer.Panel2
            // 
            this.MainSplitContainer.Panel2.Controls.Add(this.GeWikiBox);
            this.MainSplitContainer.Panel2.Controls.Add(this.label4);
            this.MainSplitContainer.Panel2.Controls.Add(this.SaveAsButton);
            this.MainSplitContainer.Panel2.Controls.Add(this.SaveButton);
            this.MainSplitContainer.Size = new System.Drawing.Size(760, 450);
            this.MainSplitContainer.SplitterDistance = 380;
            this.MainSplitContainer.TabIndex = 6;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(4, 4);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(50, 13);
            this.label3.TabIndex = 0;
            this.label3.Text = "English : ";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(4, 4);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(53, 13);
            this.label4.TabIndex = 0;
            this.label4.Text = "German : ";
            // 
            // GenerateNewGeButton
            // 
            this.GenerateNewGeButton.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.GenerateNewGeButton.Location = new System.Drawing.Point(672, 69);
            this.GenerateNewGeButton.Name = "GenerateNewGeButton";
            this.GenerateNewGeButton.Size = new System.Drawing.Size(100, 23);
            this.GenerateNewGeButton.TabIndex = 9;
            this.GenerateNewGeButton.Text = "Generate New";
            this.GenerateNewGeButton.UseVisualStyleBackColor = true;
            this.GenerateNewGeButton.Click += new System.EventHandler(this.GenerateNewGeButton_Click);
            // 
            // SaveEnButton
            // 
            this.SaveEnButton.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Right)));
            this.SaveEnButton.Location = new System.Drawing.Point(286, 424);
            this.SaveEnButton.Name = "SaveEnButton";
            this.SaveEnButton.Size = new System.Drawing.Size(91, 23);
            this.SaveEnButton.TabIndex = 10;
            this.SaveEnButton.Text = "Save English";
            this.SaveEnButton.UseVisualStyleBackColor = true;
            this.SaveEnButton.Click += new System.EventHandler(this.SaveEnButton_Click);
            // 
            // EngWikiBox
            // 
            this.EngWikiBox.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.EngWikiBox.AutoScrollMinSize = new System.Drawing.Size(27, 14);
            this.EngWikiBox.BackBrush = null;
            this.EngWikiBox.CharHeight = 14;
            this.EngWikiBox.CharWidth = 8;
            this.EngWikiBox.Cursor = System.Windows.Forms.Cursors.IBeam;
            this.EngWikiBox.DisabledColor = System.Drawing.Color.FromArgb(((int)(((byte)(100)))), ((int)(((byte)(180)))), ((int)(((byte)(180)))), ((int)(((byte)(180)))));
            this.EngWikiBox.Font = new System.Drawing.Font("Courier New", 9.75F);
            this.EngWikiBox.ForeColor = System.Drawing.SystemColors.ControlText;
            this.EngWikiBox.IsReplaceMode = false;
            this.EngWikiBox.Location = new System.Drawing.Point(7, 20);
            this.EngWikiBox.Name = "EngWikiBox";
            this.EngWikiBox.Paddings = new System.Windows.Forms.Padding(0);
            this.EngWikiBox.SelectionColor = System.Drawing.Color.FromArgb(((int)(((byte)(60)))), ((int)(((byte)(0)))), ((int)(((byte)(0)))), ((int)(((byte)(255)))));
            this.EngWikiBox.Size = new System.Drawing.Size(370, 398);
            this.EngWikiBox.TabIndex = 1;
            this.EngWikiBox.Zoom = 100;
            this.EngWikiBox.TextChanged += new System.EventHandler<FastColoredTextBoxNS.TextChangedEventArgs>(this.EngWikiBox_TextChanged);
            // 
            // GeWikiBox
            // 
            this.GeWikiBox.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.GeWikiBox.AutoScrollMinSize = new System.Drawing.Size(27, 14);
            this.GeWikiBox.BackBrush = null;
            this.GeWikiBox.CharHeight = 14;
            this.GeWikiBox.CharWidth = 8;
            this.GeWikiBox.Cursor = System.Windows.Forms.Cursors.IBeam;
            this.GeWikiBox.DisabledColor = System.Drawing.Color.FromArgb(((int)(((byte)(100)))), ((int)(((byte)(180)))), ((int)(((byte)(180)))), ((int)(((byte)(180)))));
            this.GeWikiBox.Font = new System.Drawing.Font("Courier New", 9.75F);
            this.GeWikiBox.ForeColor = System.Drawing.SystemColors.ControlText;
            this.GeWikiBox.IsReplaceMode = false;
            this.GeWikiBox.Location = new System.Drawing.Point(7, 20);
            this.GeWikiBox.Name = "GeWikiBox";
            this.GeWikiBox.Paddings = new System.Windows.Forms.Padding(0);
            this.GeWikiBox.SelectionColor = System.Drawing.Color.FromArgb(((int)(((byte)(60)))), ((int)(((byte)(0)))), ((int)(((byte)(0)))), ((int)(((byte)(255)))));
            this.GeWikiBox.Size = new System.Drawing.Size(366, 398);
            this.GeWikiBox.TabIndex = 1;
            this.GeWikiBox.Zoom = 100;
            this.GeWikiBox.TextChanged += new System.EventHandler<FastColoredTextBoxNS.TextChangedEventArgs>(this.GeWikiBox_TextChanged);
            // 
            // MainForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.White;
            this.ClientSize = new System.Drawing.Size(784, 560);
            this.Controls.Add(this.GenerateNewGeButton);
            this.Controls.Add(this.MainSplitContainer);
            this.Controls.Add(this.GeOpenButton);
            this.Controls.Add(this.GeFileNameBox);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.EngOpenButton);
            this.Controls.Add(this.EngFileNameBox);
            this.Controls.Add(this.label1);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "MainForm";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Wiki Translation Aid";
            this.MainSplitContainer.Panel1.ResumeLayout(false);
            this.MainSplitContainer.Panel1.PerformLayout();
            this.MainSplitContainer.Panel2.ResumeLayout(false);
            this.MainSplitContainer.Panel2.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.MainSplitContainer)).EndInit();
            this.MainSplitContainer.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.EngWikiBox)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.GeWikiBox)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox EngFileNameBox;
        private System.Windows.Forms.Button EngOpenButton;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox GeFileNameBox;
        private System.Windows.Forms.Button GeOpenButton;
        private System.Windows.Forms.Button SaveAsButton;
        private System.Windows.Forms.Button SaveButton;
        private System.Windows.Forms.SplitContainer MainSplitContainer;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label4;
        private WikiTextBox EngWikiBox;
        private WikiTextBox GeWikiBox;
        private System.Windows.Forms.Button GenerateNewGeButton;
        private System.Windows.Forms.Button SaveEnButton;

    }
}