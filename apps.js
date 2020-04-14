const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'taskmanager';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
  db.collection('users').insertOne({
      name:'Andrew',
      age:26
  },(err,result) =>{
      if(err){
          return console.log('unable to return')
      }
      console.log(result.ops)
  }
  )
 
  client.close();
});