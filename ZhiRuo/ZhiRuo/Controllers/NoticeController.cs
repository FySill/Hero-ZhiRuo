using System.Web.Mvc;

namespace ZhiRuo.Controllers
{
    public class NoticeController : Controller
    {
        private string fileBase = "/ZhiRuo/Notice/";     

        public ActionResult IceName()
        {
            string path = Server.MapPath(fileBase + "IceName.txt");
            return File(path, "application/json");
        }
        public ActionResult IsEnable()
        {
            string path = Server.MapPath(fileBase + "IsEnable.txt");
            return File(path, "application/json");
        }

        public ActionResult Start()
        {
            string path = Server.MapPath(fileBase + "Start.txt");
            return File(path, "application/json");
        }
        public ActionResult Upt()
        {
            string path = Server.MapPath(fileBase + "Upt.txt");
            return File(path, "application/json");
        }
    }
}
