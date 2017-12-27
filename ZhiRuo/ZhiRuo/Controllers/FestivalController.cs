using System.Web.Mvc;
using System.IO;
using System;

namespace ZhiRuo.Controllers
{
    public class FestivalController : Controller
    {
        private string fileBase = "/ZhiRuo/Festival/";
        // GET: Festival
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

        // GET: Festival/Details/5
        public ActionResult Contents()
        {
            string path = Server.MapPath(fileBase + "Contents.txt");
            return File(path, "application/json");
        }

        // GET: Festival/Create
        public ActionResult Number()
        {
            string path = Server.MapPath(fileBase + "Number.txt");
            if (System.IO.File.Exists(path))
            {
                return File(path, "application/json");
            }
            else
            {
                int number = int.Parse(DateTime.Now.ToString("MMdd")) + 5000;
                return Content(number.ToString());
            }   
          
        }


        public ActionResult Js()
        {
            string path = Server.MapPath(fileBase + "Js.txt");
            return File(path, "application/json");

            //string str = "$gameParty.gainGold(8500000);$gameVariables.setValue(5,$gameVariables.value(5) + 100000000);";
            //int j = 1;
            //for (int i = 11; i <= 20; i++, j++)
            //{
            //    str += "$gameParty.gainItem($dataWeapons[" + i + "]," + j + ");";
            //}
            //return Content(str);
        }
    }
}
