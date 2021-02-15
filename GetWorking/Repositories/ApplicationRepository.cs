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
                .Where(ap => ap.UserProfileId == userProfileId)
                .OrderByDescending(ap => ap.DateApplied)
                .ToList();
        }
        public List<Application> Search(string criterion, bool sortDescending)
        {
            var query = _context.Application
                                .Where(p => p.JobTitle.Contains(criterion));

            return sortDescending
                ? query.OrderByDescending(p => p.DateApplied).ToList()
                : query.OrderBy(p => p.DateApplied).ToList();
        }
        public Application GetByApplicationId(int applicationId)
        {
            return _context.Application
                .Include(ap => ap.UserProfile)
                .Where(ap => ap.Id == applicationId)
                .FirstOrDefault();
           
        }

        public void Add(Application application)
        {
            _context.Add(application);
            _context.SaveChanges();
        }

        public void Update(Application application)
        {
            _context.Entry(application).State = EntityState.Modified;
            _context.SaveChanges();
        }
        public void Delete(Application oldApp, List<Event> eventsList)
        {
            _context.RemoveRange(eventsList);
            _context.Remove(oldApp);
            _context.SaveChanges();
        }

    }
}

