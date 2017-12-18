namespace HostEdit
{
    partial class HostMain
    {
        /// <summary>
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows 窗体设计器生成的代码

        /// <summary>
        /// 设计器支持所需的方法 - 不要修改
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(HostMain));
            this.btnZhiruo = new System.Windows.Forms.Button();
            this.btnDodox = new System.Windows.Forms.Button();
            this.tbNewIp = new System.Windows.Forms.TextBox();
            this.lbNewIp = new System.Windows.Forms.Label();
            this.btnRemove = new System.Windows.Forms.Button();
            this.cbCurrentIpList = new System.Windows.Forms.ComboBox();
            this.label2 = new System.Windows.Forms.Label();
            this.btnAdd = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // btnZhiruo
            // 
            this.btnZhiruo.BackColor = System.Drawing.SystemColors.Control;
            this.btnZhiruo.Font = new System.Drawing.Font("Microsoft YaHei", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.btnZhiruo.ForeColor = System.Drawing.Color.DarkRed;
            this.btnZhiruo.Location = new System.Drawing.Point(83, 237);
            this.btnZhiruo.Name = "btnZhiruo";
            this.btnZhiruo.Size = new System.Drawing.Size(125, 36);
            this.btnZhiruo.TabIndex = 0;
            this.btnZhiruo.Text = "Host到芷若";
            this.btnZhiruo.UseVisualStyleBackColor = false;
            this.btnZhiruo.Click += new System.EventHandler(this.btnZhiruo_Click);
            // 
            // btnDodox
            // 
            this.btnDodox.Font = new System.Drawing.Font("Microsoft YaHei", 10.5F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.btnDodox.ForeColor = System.Drawing.SystemColors.HotTrack;
            this.btnDodox.Location = new System.Drawing.Point(258, 237);
            this.btnDodox.Name = "btnDodox";
            this.btnDodox.Size = new System.Drawing.Size(125, 35);
            this.btnDodox.TabIndex = 1;
            this.btnDodox.Text = "Host到DoDox";
            this.btnDodox.UseVisualStyleBackColor = true;
            this.btnDodox.Click += new System.EventHandler(this.btnDodox_Click);
            // 
            // tbNewIp
            // 
            this.tbNewIp.Font = new System.Drawing.Font("Microsoft YaHei", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.tbNewIp.Location = new System.Drawing.Point(163, 88);
            this.tbNewIp.Name = "tbNewIp";
            this.tbNewIp.Size = new System.Drawing.Size(154, 29);
            this.tbNewIp.TabIndex = 2;
            // 
            // lbNewIp
            // 
            this.lbNewIp.AutoSize = true;
            this.lbNewIp.Font = new System.Drawing.Font("Microsoft YaHei", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lbNewIp.ForeColor = System.Drawing.SystemColors.Highlight;
            this.lbNewIp.Location = new System.Drawing.Point(49, 88);
            this.lbNewIp.Name = "lbNewIp";
            this.lbNewIp.Size = new System.Drawing.Size(92, 21);
            this.lbNewIp.TabIndex = 3;
            this.lbNewIp.Text = "要的加入iP:";
            // 
            // btnRemove
            // 
            this.btnRemove.Font = new System.Drawing.Font("Microsoft YaHei", 10.5F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.btnRemove.ForeColor = System.Drawing.SystemColors.HotTrack;
            this.btnRemove.Location = new System.Drawing.Point(344, 147);
            this.btnRemove.Name = "btnRemove";
            this.btnRemove.Size = new System.Drawing.Size(125, 35);
            this.btnRemove.TabIndex = 8;
            this.btnRemove.Text = "移除当前的iP";
            this.btnRemove.UseVisualStyleBackColor = true;
            this.btnRemove.Click += new System.EventHandler(this.btnRemove_Click);
            // 
            // cbCurrentIpList
            // 
            this.cbCurrentIpList.Font = new System.Drawing.Font("Microsoft YaHei", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.cbCurrentIpList.FormattingEnabled = true;
            this.cbCurrentIpList.Location = new System.Drawing.Point(163, 147);
            this.cbCurrentIpList.Name = "cbCurrentIpList";
            this.cbCurrentIpList.Size = new System.Drawing.Size(154, 29);
            this.cbCurrentIpList.TabIndex = 10;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Microsoft YaHei", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.ForeColor = System.Drawing.SystemColors.Highlight;
            this.label2.Location = new System.Drawing.Point(33, 150);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(108, 21);
            this.label2.TabIndex = 12;
            this.label2.Text = "当前选择的iP:";
            // 
            // btnAdd
            // 
            this.btnAdd.Font = new System.Drawing.Font("Microsoft YaHei", 10.5F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.btnAdd.ForeColor = System.Drawing.SystemColors.HotTrack;
            this.btnAdd.Location = new System.Drawing.Point(344, 85);
            this.btnAdd.Name = "btnAdd";
            this.btnAdd.Size = new System.Drawing.Size(125, 35);
            this.btnAdd.TabIndex = 15;
            this.btnAdd.Text = "增加";
            this.btnAdd.UseVisualStyleBackColor = true;
            this.btnAdd.Click += new System.EventHandler(this.btnAdd_Click);
            // 
            // HostMain
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackgroundImage = global::HostEdit.Properties.Resources.zhiruo;
            this.ClientSize = new System.Drawing.Size(516, 368);
            this.Controls.Add(this.btnAdd);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.cbCurrentIpList);
            this.Controls.Add(this.btnRemove);
            this.Controls.Add(this.lbNewIp);
            this.Controls.Add(this.tbNewIp);
            this.Controls.Add(this.btnDodox);
            this.Controls.Add(this.btnZhiruo);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.MaximizeBox = false;
            this.Name = "HostMain";
            this.Text = "Host Update";
            this.FormClosed += new System.Windows.Forms.FormClosedEventHandler(this.HostMain_FormClosed);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btnZhiruo;
        private System.Windows.Forms.Button btnDodox;
        private System.Windows.Forms.TextBox tbNewIp;
        private System.Windows.Forms.Label lbNewIp;
        private System.Windows.Forms.Button btnRemove;
        private System.Windows.Forms.ComboBox cbCurrentIpList;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Button btnAdd;
    }
}

