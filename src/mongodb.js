const mongoose = require("mongoose");
const URI ='mongodb+srv://root:admin@cluster0-jim6x.mongodb.net/test?retryWrites=true&w=majority';
// const URI = "mongodb://mongo/test"
mongoose
  .connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Db is connected"))
  .catch((err) => console.log(err));
