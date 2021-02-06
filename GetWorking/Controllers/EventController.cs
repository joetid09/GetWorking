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
        [HttpGet("{applicationId}")]
        public IActionResult GetEvents(int applicationId)
        {
            return Ok(_repo.GetByApplicationId(applicationId));
        }
        [HttpPost]
        public IActionResult AddEvent(Event newEvent)
        {
            _repo.Add(newEvent);
            return base.Created("", newEvent);

        }

        [HttpPut("{id}")]
        public IActionResult UpdateEvent(int id, Event newEvent)
        {
            var OriginalEvent = _repo.GetEventById(id);
            OriginalEvent.Title = newEvent.Title;
            OriginalEvent.Body = newEvent.Body;
            OriginalEvent.DateToComplete = newEvent.DateToComplete;
            OriginalEvent.Status = newEvent.Status;
            _repo.Update(OriginalEvent);
            return Ok();

        }

        //private UserProfile GetCurrentUserProfile()
        //{
        //    try
        //    {
        //        var firebaseUserId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        //        return _userProfileRepo.GetByFirebaseUserId(firebaseUserId);
        //    }
        //    catch (Exception ex)
        //    {
        //        return null;
        //    }
        //}
    //}
    }
}
