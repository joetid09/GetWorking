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
    public class EventController : ControllerBase
    {
        private readonly IEventRepository _repo;
        public EventController(IEventRepository repo)
        {
            _repo = repo;
        }
        [HttpGet("{userProfileId}")]
        public IActionResult GetEvents(int eventId)
        {
            return Ok(_repo.GetByApplicationId(eventId));
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
