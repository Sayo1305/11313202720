const express = require("express");
// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
// const httpsLocalhost = require('https-localhost');
const app = express();
const cors = require('cors');
// const options = httpsLocalhost();
const port = 8000;
// https.createServer(options, app).listen(port);
require("dotenv").config();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, 
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
const dataroute = require("./routes/dataroutes");
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/trains", dataroute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
