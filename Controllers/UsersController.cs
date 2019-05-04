using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hamaka.Models;
using Hamaka.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace Hamaka.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserService _userService;

        public UsersController(UserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public ActionResult<List<User>> Get()
        {
            return _userService.Get();
        }

        [HttpGet("{id:length(24)}", Name = "GetUser")]
        public ActionResult<User> Get(string id)
        {
            var user = _userService.Get(id);
            return user;
        }

        [HttpPost]
        public ActionResult<User> Create(User user)
        {
            _userService.Create(user);

            return CreatedAtRoute("GetUser", new { id = user.Id.ToString() }, user);
        }

        [HttpPut("{id:length(24)}")]
        public ActionResult<UpdateResult> Update(string id, User userIn)
        {
            return _userService.Update(id, userIn);
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            _userService.Remove(id);

            return NoContent();
        }
    }
}