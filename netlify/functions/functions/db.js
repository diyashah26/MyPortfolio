const mongoose = require("mongoose");

let conn = null;

const uri = "mongodb://localhost:27017/MyPortfolio";
async function connectToDatabase() {
  if (conn) return conn;

  conn = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return conn;
}

module.exports = connectToDatabase;
