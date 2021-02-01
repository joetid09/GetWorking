using GetWorking.Models;
using System.Collections.Generic;

namespace GetWorking.Repositories
{
    public interface IApplicationRepository
    {
        void Add(Application application);
        Application GetByApplicationId(int applicationId);
        List<Application> GetByUserProfileId(int userProfileId);
    }
}