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
        public class UserProfileController : ControllerBase
        {
            private readonly IUserProfileRepository _repo;
            public UserProfileController(IUserProfileRepository repo)
            {
                _repo = repo;
            }

            [HttpGet("{firebaseUserId}")]
            public IActionResult GetUserProfile(string firebaseUserId)
            {
                return Ok(_repo.GetByFirebaseUserId(firebaseUserId));
            }

            [HttpPost]
            public IActionResult Post(UserProfile userProfile)
            {
                _repo.Add(userProfile);
                return CreatedAtAction(
                    nameof(GetUserProfile),
                    new { firebaseUserId = userProfile.FirebaseUserId },
                    userProfile);
            }
        }
}
