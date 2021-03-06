﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SQLite;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HeroSqlite
{
    class Program
    {
        static void Main(string[] args)
        {
            IDictionary<string, string> dict = new Dictionary<string, string>();
            using (SQLiteConnection conn = new SQLiteConnection(@"data source=C:\Users\v-xujren\AppData\Local\KADOKAWA\RPGMV\Local Storage\file__0.localstorage"))
            {
                using (SQLiteCommand cmd = new SQLiteCommand())
                {
                    cmd.Connection = conn;
                    conn.Open();

                    SQLiteHelper sh = new SQLiteHelper(cmd);

                    DataTable dt = sh.Select("select * from ItemTable;");
                    for (int i = 0; i < dt.Rows.Count; i++)
                    {
                        dict.Add(dt.Rows[i]["key"].ToString(),System.Text.Encoding.Unicode.GetString((byte[])dt.Rows[i]["value"]));
                    }

                    conn.Close();
                }
            }
            string[] heroDataArray = dict["heroData"].Split('#');
            File.AppendAllText(@"hero.js", "var hero = {\n");
            for (int i = 0; i < heroDataArray.Count()-1; i++)
            {
                string[] data = heroDataArray[i].Split('~');
                data[1] = data[1].Replace("[object Object]", "[object, Object]");
                if (!data[1].Contains("function") && data[1].Contains(',') && !data[1].Contains("["))
                {
                    data[1] = "[" + data[1] + "]";
                }
                int intTemp;bool boolTemp;
                bool isInt = int.TryParse(data[1],out intTemp);
                bool isBool = bool.TryParse(data[1], out boolTemp);
                bool isNotNull = data[1] != null;
                if (isNotNull && !isInt && !isBool && !data[1].Contains("function") && !data[1].Contains(",") && !data[1].Equals("undefined"))
                {
                    data[1]='"'+data[1]+'"';
                }
                File.AppendAllText(@"hero.js", String.Format("{0}:{1},\n", data[0],data[1]));
            }
            File.AppendAllText(@"hero.js", "\n}");
            Console.WriteLine("done");
            Console.Read();
        }
    }
}
