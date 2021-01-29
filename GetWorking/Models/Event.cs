using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GetWorking.Models
{
    public class Event
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string Title { get; set; }
        [Required]
        public DateTime Datecreated { get; set; }
        [Required]
        public DataType DateToComplete { get; set; }
        [Required]
        [MaxLength(256)]
        public string Body { get; set; }
        public int Status { get; set; }
        [Required]
        public int ApplicationId { get; set; }
        public Application Application {get; set;}
    }
}
