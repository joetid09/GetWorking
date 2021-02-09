using GetWorking.Models;
using GetWorking.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace GetWorking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationController : ControllerBase
    {
        private readonly IApplicationRepository _appRepo;
        private readonly IUserProfileRepository _userProfileRepo;
        private readonly IEventRepository _eventRepo;
        public ApplicationController(IApplicationRepository applicationRepo, IUserProfileRepository userProfileRepo, IEventRepository eventRepository)
        {
            _appRepo = applicationRepo;
            _userProfileRepo = userProfileRepo;
            _eventRepo = eventRepository;
        }
        [HttpGet]
        public IActionResult GetUserApplications()
        {
            var user = GetCurrentUserProfile();
            return Ok(_appRepo.GetByUserProfileId(user.Id));
        }

        [HttpGet("{id}")]
        public IActionResult GetApplicationDetail(int id)
        {
            var user = GetCurrentUserProfile();
           var applicationDetails = _appRepo.GetByApplicationId(id);
            var date = applicationDetails.DateApplied.Date;
            applicationDetails.DateApplied = date;
            //if (user.Id != applicationDetails.UserProfileId) {
            //   return Unauthorized();
            //        }
            return Ok(applicationDetails);
        }

        [HttpPost]
        public IActionResult Application(Application application)
        {
            var user = GetCurrentUserProfile();
            application.UserProfileId = user.Id;
            _appRepo.Add(application);
            return base.Created("", application);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateApplication(int id, Application application)
        {
            var OriginalApplication = _appRepo.GetByApplicationId(id);
            if(id != application.Id)
            {
                return BadRequest();
            }
            OriginalApplication.Company = application.Company;
            OriginalApplication.JobTitle = application.JobTitle;
            OriginalApplication.DateApplied = application.DateApplied;
            _appRepo.Update(OriginalApplication);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var eventList = _eventRepo.GetByApplicationId(id);
            var oldApp = _appRepo.GetByApplicationId(id);
            _appRepo.Delete(oldApp, eventList);
            return Ok();
        }
        private UserProfile GetCurrentUserProfile()
        {
            try
            {
                var firebaseUserId = User.FindFirstValue(ClaimTypes.NameIdentifier);
                return _userProfileRepo.GetByFirebaseUserId(firebaseUserId);
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
