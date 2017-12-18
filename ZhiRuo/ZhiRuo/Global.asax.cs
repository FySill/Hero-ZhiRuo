using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace ZhiRuo
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }

        protected void Application_BeginRequest(Object sender, EventArgs e)
        {
            HttpContext.Current.Response.Headers.Add("Access-Control-Allow-Methods", "POST,GET");
            HttpContext.Current.Response.Headers.Add("Access-Control-Allow-Headers", "x-requested-with");
            HttpContext.Current.Response.Headers.Add("Access-Control-Allow-Origin", "*");
        }
    }
}
