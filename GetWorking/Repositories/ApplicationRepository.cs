using GetWorking.Data;
using GetWorking.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GetWorking.Repositories
{
    public class ApplicationRepository : IApplicationRepository
    {
        private readonly ApplicationDbContext _context;

        public ApplicationRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Application> GetByUserProfileId(int userProfileId)
        {
            return _context.Application
                .Where(ap => ap.Id == userProfileId)
                .ToList();


        }

        public void Add(Application application)
        {
            _context.Add(application);
            _context.SaveChanges();
        }




    }
}

