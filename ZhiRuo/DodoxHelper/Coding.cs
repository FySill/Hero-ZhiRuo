using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace DodoxHelper
{
    public class Coding
    {
        public static void ChangeCoding2UTF8()
        {
            string dir = @"C:\Users\v-xujren\source\repos\ZhiRuo\ZhiRuo\ZhiRuo\HeroII\Maps";

            List<string> destfiles = new List<string>();
         
            foreach (var eachfileinfo in new DirectoryInfo(dir).GetFiles())
            {
                destfiles.Add(eachfileinfo.FullName);
            }


            foreach (string destfile in destfiles)
            {
                File.WriteAllText(destfile, File.ReadAllText(destfile, Encoding.Default), Encoding.UTF8);
            }
            Console.WriteLine("finished.");

        }
    }
}
