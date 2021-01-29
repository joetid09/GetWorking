using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GetWorking.Models
{
    public class Application
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string JobTitle { get; set; }
        [Required]
        [MaxLength(50)]
        public string Company { get; set; }
        [Required]
        public DateTime DateApplied { get; set; }
        [Required]
        public int ApplicationId { get; set; }
    }
}
