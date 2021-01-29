using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GetWorking.Models;


namespace GetWorking.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<UserProfile> UserProfile { get; set; }
        public DbSet<Application> Application { get; set; }
        public DbSet<Event> Event { get; set; }
        public DbSet<Tag> Tag { get; set; }
    }
}
