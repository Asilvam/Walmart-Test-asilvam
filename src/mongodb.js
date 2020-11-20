const mongoose = require("mongoose");
// const URI1 ='mongodb+srv://root:admin@cluster0-jim6x.mongodb.net/test?retryWrites=true&w=majority';
 const URI3 ="mongodb+srv://admin:Domi2702@cluster0.gpflb.mongodb.net/test_w?retryWrites=true&w=majority"
//const URI ="mongodb://root:admin@cluster0-shard-00-00-jim6x.mongodb.net:27017,cluster0-shard-00-01-jim6x.mongodb.net:27017,cluster0-shard-00-02-jim6x.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
//const URI2 = "mongodb://mongo/mydatabase"
mongoose
  .connect(URI3, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Db is connected"))
  .catch((err) => console.log(err));
