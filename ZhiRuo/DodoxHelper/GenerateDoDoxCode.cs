using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DodoxHelper
{
    public class GenerateDoDoxCode
    {
        public static string   Generate()
        {
            string str = string.Empty;
            int j = 1;

            for (int i = 82; i < 96; i++, j++)
            {

                str += $"$gameVariables.setValue({i},$gameVariables.value({i}) + 99);";
            }
            return str;
        }
    }
}
