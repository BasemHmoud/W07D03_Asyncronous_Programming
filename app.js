const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

//puls check q1
const fs = require("fs");
const axios = require("axios");

//puls check q2
let content;
const readFile = () => {
  fs.readFile("./data.txt", (err, data) => {
    if (err) throw err;
    content = data.toString();
    console.log(content);
  });
};
readFile();
const writeFile = () => {
fs.writeFile("./text.txt","welcome to meraki academ",(err)=>{
    if(err) throw err;
    console.log("The file has been saved"); 
}) 

};
writeFile();
app.get("/", (req, res) => {
  res.status(200);
  res.send("hi");
});

app.listen(port, () => {
  console.log(`server run on port ${port}`);
});
