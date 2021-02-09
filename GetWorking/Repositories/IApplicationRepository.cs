using GetWorking.Models;
using System.Collections.Generic;

namespace GetWorking.Repositories
{
    public interface IApplicationRepository
    {
        void Add(Application application);
        void Delete(Application oldApp, List<Event> eventsList);
        Application GetByApplicationId(int applicationId);
        List<Application> GetByUserProfileId(int userProfileId);
        void Update(Application application);
    }
}