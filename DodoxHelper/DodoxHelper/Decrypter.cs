using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DodoxHelper
{
    public class Decrypter
    {
        private static string SIGNATURE = "5250474d56000000";
        private static string VER = "000301";
        private static string REMAIN = "0000000000";
        private static int headerlength = 16;
        private static string encryptionKey = "36c2c0f9c7973007674918eea35c2269";
        public static void DecryptImg(string url)
        {
            url = ExtToEncryptExt(url);
            DecryptArrayBuffer(null);

        }

        public static string ExtToEncryptExt(string url)
        {
            var ext = url.Split('.')[1];
            var encryptedExt = ext;
            if (ext == "ogg") encryptedExt = ".rpgmvo";
            else if (ext == "m4a") encryptedExt = ".rpgmvm";
            else if (ext == "png") encryptedExt = ".rpgmvp";
            else encryptedExt = ext;
            return url.Substring(0, url.LastIndexOf(ext) - 1) + encryptedExt;
        }

        public static void DecryptArrayBuffer(byte[] bytes)
        {
            string seed = SIGNATURE + VER + REMAIN;
            uint[] refBytes = new uint[16];
            int i=0;
            for (i = 0; i < headerlength; i++)
            {
                refBytes[i]=uint.Parse(seed.Substring(i * 2, 2), System.Globalization.NumberStyles.HexNumber);
                //refBytes[i] = int.Parse("0x" + seed.Substring(i * 2, 2), 16);
            }
            for (i = 0; i < headerlength; i++)
            {
                if (bytes[i] != refBytes[i])
                {
                    throw new Exception("Header is wrong");
                }
            }
        
            byte[] newBytes=new byte[bytes.Length-16];
            Array.Copy(bytes, 16, newBytes, 0, bytes.Length - 16);
          
            for (i = 0; i < headerlength; i++)
            {
                newBytes[i] = (byte)((uint)newBytes[i] ^ uint.Parse(encryptionKey.Substring(i, 1), System.Globalization.NumberStyles.HexNumber));
            }
            File.WriteAllBytes("1.png", newBytes);

        }
    }
}
