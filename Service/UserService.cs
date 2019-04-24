﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hamaka.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace Hamaka.Service
{
    public class UserService
    {
        private readonly IMongoCollection<User> _users;

        public UserService(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("mongodb://localhost:27017"));
            var database = client.GetDatabase("mongodb://localhost:27017");
            _users = database.GetCollection<User>("users");
        }

        public List<User> Get()
        {
            return _users.Find(user => true).ToList();
        }

        public User Get(string id)
        {
            return _users.Find<User>(user => user.Id == id).FirstOrDefault();
        }

        public User Create(User user)
        {
            _users.InsertOne(user);
            return user;
        }

        public void Update(string id, User userIn)
        {
            _users.ReplaceOne(book => book.Id == id, userIn);
        }

        public void Remove(User userIn)
        {
            _users.DeleteOne(book => book.Id == userIn.Id);
        }

        public void Remove(string id)
        {
            _users.DeleteOne(user => user.Id == id);
        }
    }
}
