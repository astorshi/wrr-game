require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");

//const { DB_HOST, DB_NAME, DB_PORT } = require("./src/db/config");
//const { DB_HOST, DB_NAME, DB_PORT } = process.env;
//const morgan = require('morgan');
//const secretKey = "834579438534vlkdfvnfdlvn324n24543534" //require("crypto").randomBytes(64).toString("hex");
const { connect } = require("./src/db/db");
const unitRouter = require("./src/routes/unitRouter");

const PORT = 4000 // || process.env.PORT
const app = express();

connect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/unit/", unitRouter);
// app.use("/track", trackRouter);
// res.sendStatus(200);


app.listen(PORT, () => {
  console.log("Server started on PORT", PORT);
});
