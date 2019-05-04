
using System;
using MongoDB.Driver;

namespace Hamaka.Service
{
    public class MongoService
    {
        public readonly IMongoDatabase db;

        public MongoService() 
        {
            // Get DB uri from enviroment variables
            var uri = Environment.GetEnvironmentVariable("MONGO_URI"); 
            // Create client
            var client = new MongoClient(uri);
            // Get database
            db = client.GetDatabase("hamaka"); 
        }
    }
}