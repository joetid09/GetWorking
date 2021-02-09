using GetWorking.Models;
using System.Collections.Generic;

namespace GetWorking.Repositories
{
    public interface IEventRepository
    {
        void Add(Event newEvent);
        void Delete(Event oldEvent);
        List<Event> GetByApplicationId(int applicationId);
        Event GetEventById(int eventId);
        void Update(Event newEvent);
    }
}