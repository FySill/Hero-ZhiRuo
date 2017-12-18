using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DodoxHelper
{
    public class Armor
    {
        public int Id { get; set; }
        public int AnimationId { get; set; }
        public string Description { get; set; }
        public int EtypeId { get; set; }
        public List<Trait> Traits { get; set; }
        public int IconIndex { get; set; }
        public string Name { get; set; }

        public string Note { get; set; }

        public int[] Params { get; set; }
        public int Price { get; set; }
        public int AtypeId { get; set; }
    }
}