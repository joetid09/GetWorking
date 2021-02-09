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

        [HttpPut("updateStatus/{id}")]
        public IActionResult UpdateStatus(int id)
        {
            var OriginalEvent = _repo.GetEventById(id);
            if(OriginalEvent.Status == 0)
            {
                OriginalEvent.Status = 1;
                _repo.Update(OriginalEvent);
                    return Ok();
            }
            else if (OriginalEvent.Status == 1)
            {
                OriginalEvent.Status = 0;
                _repo.Update(OriginalEvent);
                return Ok();
            }
            return NoContent();
        }
    }
}
