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
            return File(path, "application/json");
        }

        public ActionResult Js()
        {
            string path = Server.MapPath(fileBase + "Js.txt");
            return File(path, "application/json");
        }
    }
}
