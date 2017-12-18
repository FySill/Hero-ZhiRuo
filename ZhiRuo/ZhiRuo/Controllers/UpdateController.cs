using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ZhiRuo.Controllers
{
    public class UpdateController : Controller
    {
        private string fileBase = "/ZhiRuo/Update/";

        public ActionResult Online()
        {
            string path = Server.MapPath(fileBase + "Online.txt");
            return File(path, "application/json");
        }
        public ActionResult Safety()
        {
            string path = Server.MapPath(fileBase + "Safety.txt");
            return File(path, "application/json");
        }

        public ActionResult Contents()
        {
            string path = Server.MapPath(fileBase + "Contents.txt");
            return File(path, "application/json");
        }

        public ActionResult Update()
        {
            string path = Server.MapPath(fileBase + "Update.txt");
            return File(path, "application/json");
        }

        public ActionResult Fmii()
        {
            string path = Server.MapPath(fileBase + "Fmii.txt");
            return File(path, "application/json");
        }

        public ActionResult DataII()
        {
            string path = Server.MapPath(fileBase + "DataII.txt");
            return File(path, "application/json");
        }
        public ActionResult Version()
        {
            string path = Server.MapPath(fileBase + "Version.txt");
            return File(path, "application/json");
        }
        public ActionResult Hot()
        {
            string path = Server.MapPath(fileBase + "Hot.txt");
            return File(path, "application/json");
        }
    }
}