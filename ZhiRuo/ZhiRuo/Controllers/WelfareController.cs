using System;
using System.Web.Mvc;

namespace ZhiRuo.Controllers
{
    public class WelfareController : Controller
    {
        private string fileBase = "/ZhiRuo/Welfare/";

        public ActionResult Name()
        {
            string path = Server.MapPath(fileBase + "Name.txt");
            return File(path, "application/json");
        }
        public ActionResult IsEnable()
        {
            string path = Server.MapPath(fileBase + "IsEnable.txt");
            return File(path, "application/json");
        }

        public ActionResult IdenCode()
        {
            string path = Server.MapPath(fileBase + "IdenCode.txt");
            return File(path, "application/json");
        }

        public ActionResult Contents()
        {
            string path = Server.MapPath(fileBase + "Contents.txt");
            return File(path, "application/json");
        }

        public ActionResult Number()
        {
            string path = Server.MapPath(fileBase + "Number.txt");
            if (System.IO.File.Exists(path))
            {
                return File(path, "application/json");
            }
            else
            {
                return Content(new Random().Next(5000, 9999).ToString());
            }
        }


        public ActionResult Js()
        {
            string path = Server.MapPath(fileBase + "Js.txt");
            return File(path, "application/json");

            //"$gameParty.gainItem($dataWeapons[201], 1);"

            // return "$gameParty.gainItem($dataItems[211], 9);";

            //string str = "$gameParty.gainGold(8500000);$gameVariables.setValue(5,$gameVariables.value(5) + 100000000);";
            //int j = 1;
            //for (int i = 11; i <= 20; i++, j++)
            //{
            //    str += "$gameParty.gainItem($dataWeapons[" + i + "]," + j + ");";
            //}
            //return Content(str);

            //return "$gameParty.gainGold(8500000);$gameVariables.setValue(5,$gameVariables.value(5) + 100000000);$gameParty.gainItem($dataItems[31], 99);$gameParty.gainItem($dataItems[32], 9);$gameParty.gainItem($dataItems[19], 9);$gameParty.gainItem($dataItems[314], 9);";

            //return "$gameParty.gainItem($dataItems[139], 5);$gameParty.gainItem($dataItems[9], 5);$gameParty.gainItem($dataItems[10], 5);$gameParty.gainGold(111111);$gameVariables.setValue(5,$gameVariables.value(5) + 111111); ;$gameActors._data[1]._nickname =\"[独臂神尼]\";";
        }
    }
}
