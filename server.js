const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//panggil routes
var routes = require("./routes");
routes(app);

app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
