using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DodoxHelper
{
    public class Damage
    {
        public bool Critical { get; set; }
        public int ElementId { get; set; }
        public string Formula { get; set; }
        public int Type { get; set; }
        public int Variance { get; set; }
    }
}
