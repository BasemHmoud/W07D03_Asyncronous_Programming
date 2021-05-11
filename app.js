const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

//puls check q1
const fs = require("fs");
const axios = require("axios");



app.get("/", (req, res) => {
    res.status(200);
    res.send("hi");
  });



app.listen(port, () => {
    console.log(`server run on port ${port}`);
  });
  