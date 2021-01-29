using GetWorking.Data;
using GetWorking.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GetWorking.Repositories
{
    public class EventRepository : IEventRepository
    {
        private readonly ApplicationDbContext _context;

        public EventRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Event> GetByApplicationId(int applicationId)
        {
            return _context.Event
                .Where(ep => ep.Id == applicationId)
                .ToList();


        }

        public void Add(Event newEvent)
        {
            _context.Add(newEvent);
            _context.SaveChanges();
        }




    }
}

