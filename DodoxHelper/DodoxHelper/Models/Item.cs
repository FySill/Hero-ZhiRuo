using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DodoxHelper
{
    public class Item
    {
        public int Id { get; set; }
        public int AnimationId { get; set; }
        public bool Consumable { get; set; }
        public Damage Damage { get; set; }
        public string Description { get; set; }
        public List<Effect> Effects { get; set; }
        public int HitType { get; set; }
        public int IconIndex { get; set; }
        public int ItypeId { get; set; }        
        public string Name { get; set; }
        public string Note { get; set; }
        public int Occasion { get; set; }
        public int Price { get; set; }
        public int Repeats { get; set; }
        public int Scope { get; set; }
        public int Speed { get; set; }
        public int SuccessRate { get; set; }
        public int TpGain { get; set; }      
    }
}