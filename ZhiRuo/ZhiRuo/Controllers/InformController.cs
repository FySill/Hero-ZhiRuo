using System;
using System.Web.Mvc;

namespace ZhiRuo.Controllers
{
    public class InformController : Controller
    {
        private string fileBase = "/ZhiRuo/Inform/";     

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

        public ActionResult Way()
        {
            string path = Server.MapPath(fileBase + "Way.txt");
            return File(path, "application/json");
        }

        public ActionResult Talk()
        {
            string path = Server.MapPath(fileBase + "Talk.txt");
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
        }
    }
}
