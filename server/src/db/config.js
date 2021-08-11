require('dotenv').config()
//const {DB_HOST, DB_NAME, DB_PORT} = process.env

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  poolSize: 10,
  bufferMaxEntries: 0,
};




// const DB_HOST = "localhost";
// const DB_NAME = "...";
// const DB_PORT = 27017;
// mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}

const dbConnectionURL = 'mongodb+srv://games:1234@cluster0.p0n5g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

module.exports = { dbConnectionURL, options };

