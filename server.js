// inspired by https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// db config
const db = require("./config/keys").mongoURI;

// connect to mongodb
mongoose
  .connect(
    db,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(()=> console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
