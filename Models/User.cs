using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace Hamaka.Models
{
    public class User
    {
        // atributy pro Mongo databazy

        // bude brat primarni klic,
        //unikatni identifikator usera
        [BsonId]
        public ObjectId Id { get;private set; }

        [BsonElement("Name")]   // nazvy pro databaze
        public string Name { get; set; }

        [BsonElement("Email")]
        public string Email { get; set; }

        [BsonElement("Password")]
        public string Password { get; set; }

        
        
    }
}
