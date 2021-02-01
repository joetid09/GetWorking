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
        public ApplicationController(IApplicationRepository applicationRepo, IUserProfileRepository userProfileRepo)
        {
            _appRepo = applicationRepo;
            _userProfileRepo = userProfileRepo;
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
            //var user = GetCurrentUserProfile();
           var applicationDetails = _appRepo.GetByApplicationId(id);
            //if (user.Id != id) {
            //    return Unauthorized();
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
