using System;
using System.Collections.Generic;
using System.Linq;
using Hamaka.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using MongoDB.Bson;

namespace Hamaka.Service
{
    public class UserService
    {
        private readonly IMongoCollection<User> _users; 
        public UserService(MongoService mongo)
        {
            _users = mongo.db.GetCollection<User>("users"); // kolekce uzivatelu v databazi 
        }

        public List<User> Get()
        {
            return _users.Find(user => true).ToList();
        }

        public User Get(string id)
        {
            return _users.Find<User>(user => user.Id == new ObjectId(id)).FirstOrDefault();
        }

        public User Create(User user)
        {
            _users.InsertOne(user);
            return user;
        }

        public UpdateResult Update(string id, User userIn)
        {
            // _users.ReplaceOne(book => book.Id == id, userIn);
            var update = Builders<User>.Update
                .Set(u => u.Email, userIn.Email)
                .Set(u => u.Name, userIn.Name);
            return _users.UpdateOne<User>( user => user.Id == new ObjectId(id), update);
        }

        // 
        //private bool Predicate (User user)
        //{
        //    return user.Id == new ObjectId();
        //}

        public void Remove(string id)
        {
            _users.DeleteOne(user => user.Id == new ObjectId(id));
        }

    }
}
