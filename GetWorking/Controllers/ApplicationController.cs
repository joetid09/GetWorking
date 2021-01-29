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
        private UserProfile GetCurrentUserProfile()
        {
            try
            {
                var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
                return _userProfileRepo.GetByFirebaseUserId(firebaseUserId);
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        //[HttpPost]
        //public IActionResult Post(Application application)
        //{
        //    _repo.Add(application);
        //    return CreatedAtAction(
        //        nameof(GetUserProfile),
        //        new { firebaseUserId = userProfile.FirebaseUserId },
        //        userProfile);
        //}
    }
}
