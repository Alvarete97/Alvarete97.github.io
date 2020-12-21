
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Ninetales:Asf271020@dbtfg.d4wbo.mongodb.net/dbTFG?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
