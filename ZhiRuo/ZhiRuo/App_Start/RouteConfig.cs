using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace ZhiRuo
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                  name: "Festival",
                  url: "json/{controller}/{action}",
                  defaults: new { controller = "Festival", action = "IsEnable"}
            );

            routes.MapRoute(
                 name: "Welfare",
                 url: "json/{controller}/{action}",
                 defaults: new { controller = "Welfare", action = "IsEnable" }
            );

            routes.MapRoute(
               name: "Online",
               url: "json/{controller}/{action}",
               defaults: new { controller = "Update", action = "IsEnable" }
           );

            routes.MapRoute(
                 name: "Notice",
                 url: "json/{controller}/{action}",
                 defaults: new { controller = "Notice", action = "IsEnable" }
           );
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
