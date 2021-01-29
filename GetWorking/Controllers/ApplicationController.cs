using GetWorking.Models;
using GetWorking.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GetWorking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationController : ControllerBase
    {
        private readonly IApplicationRepository _repo;
        public ApplicationController(IApplicationRepository repo)
        {
            _repo = repo;
        }
        [HttpGet("{userProfileId}")]
        public IActionResult GetUserApplications(int userProfileId)
        {
            return Ok(_repo.GetByUserProfileId(userProfileId));
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
