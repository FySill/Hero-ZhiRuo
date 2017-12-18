using System;
using System.Collections;
using System.Collections.Generic;
using System.Configuration;
using System.Diagnostics;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using System.Text.RegularExpressions;
using System.Windows.Forms;

namespace HostEdit
{
    public partial class HostMain : Form
    {
        private string hostPath;
        private string localZhiRuoIpListPath;
        public HostMain()
        {
            InitializeComponent();
            this.tbNewIp.Text = "100.100.100.100";
            hostPath = Environment.SystemDirectory + "\\drivers\\etc\\hosts";
            var zhiRuoDirectory = Directory.CreateDirectory(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData) + "\\zhiruo");
            localZhiRuoIpListPath = zhiRuoDirectory.FullName + "\\ipList.bat";
            if (File.Exists(localZhiRuoIpListPath))
            {
                Dictionary<string, bool> ipListDict = new Dictionary<string, bool>();
                FileStream fileStream;
                using (fileStream = new FileStream(localZhiRuoIpListPath, FileMode.Open, FileAccess.Read, FileShare.Read))
                {
                    BinaryFormatter bF = new BinaryFormatter();
                    ipListDict = bF.Deserialize(fileStream) as Dictionary<string, bool>;
                    foreach (var item in ipListDict)
                    {
                        cbCurrentIpList.Items.Add(item.Key);
                        if (item.Value)
                        {
                            cbCurrentIpList.SelectedItem = item.Key;
                            this.tbNewIp.Text = item.Key;
                        }
                    }
                }    
            }      
        }

        private void btnZhiruo_Click(object sender, EventArgs e)
        {
            RestoveDodox();
            File.AppendAllLines(hostPath, new string[] { $"{cbCurrentIpList.SelectedItem.ToString()} heroii.dodox.com.cn" });
            HostAndTest();
        }

        private void btnDodox_Click(object sender, EventArgs e)
        {
            RestoveDodox();
            HostAndTest();
        }

        private void RestoveDodox()
        {
            CloseALLieProcess();
            List<string> lines = new List<string>();
            lines.AddRange(File.ReadAllLines(hostPath));
            foreach (var item in cbCurrentIpList.Items)
            {
                lines.Remove($"{item.ToString()} heroii.dodox.com.cn");
            }
        
            File.WriteAllLines(hostPath, lines.ToArray());
        }
        private void HostAndTest()
        {
            CloseALLieProcess();
            ProcessStartInfo pInfo = new ProcessStartInfo("iexplore", "heroii.dodox.com.cn");
            Process.Start(pInfo);
        }


        private void CloseALLieProcess()
        {
            Process[] myProcesses = Process.GetProcesses();

            foreach (Process myProcess in myProcesses)
            {
                if (myProcess.ProcessName.ToUpper() == "IEXPLORE")
                {

                    if (!myProcess.CloseMainWindow())
                    {
                        myProcess.Kill();
                    }
                }
            }
        }

        private void btnAdd_Click(object sender, EventArgs e)
        {
            string ipPattern = @"^(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)$";

            if (!Regex.IsMatch(tbNewIp.Text, ipPattern))
            {
                MessageBox.Show("请输入正确的IP地址");
                return;
            }
            if (!this.cbCurrentIpList.Items.Contains(tbNewIp.Text))
            {
                this.cbCurrentIpList.Items.Add(tbNewIp.Text);
                if (this.cbCurrentIpList.Items.Count == 1)
                {
                    this.cbCurrentIpList.SelectedItem = tbNewIp.Text;
                    this.cbCurrentIpList.Refresh();
                }
            }
        }

        private void btnRemove_Click(object sender, EventArgs e)
        {
            if (this.cbCurrentIpList.SelectedItem != null)
            {
                RestoveDodox();
                object willRemoveItem = cbCurrentIpList.SelectedItem;
                this.cbCurrentIpList.SelectedIndex = -1;
                this.cbCurrentIpList.Items.Remove(willRemoveItem);
                if (this.cbCurrentIpList.Items.Count!=0)
                {
                    this.cbCurrentIpList.SelectedItem = this.cbCurrentIpList.Items[0];
                }            
                this.cbCurrentIpList.Refresh();
            }          
        }

        private void HostMain_FormClosed(object sender, FormClosedEventArgs e)
        {
            Dictionary<string, bool> ipListDict = new Dictionary<string, bool>();
            foreach (var item in cbCurrentIpList.Items)
            {
                if (item == cbCurrentIpList.SelectedItem)
                {
                    ipListDict.Add(item.ToString(), true);
                }
                else
                {
                    ipListDict.Add(item.ToString(), false);
                }         
            }
            FileStream fileStream;
            using (fileStream = new FileStream(localZhiRuoIpListPath, FileMode.Create))
            {
                BinaryFormatter bF = new BinaryFormatter();
                bF.Serialize(fileStream, ipListDict);
            }                      
        }
    }
}
