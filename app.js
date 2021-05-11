const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

//puls check q1
const fs = require("fs");
const axios = require("axios");
const { response } = require("express");

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
//puls check q3
const writeFile = () => {
  fs.writeFile("./text.txt", "welcome to meraki academ", (err) => {
    if (err) throw err;
    console.log("The file has been saved");
  });
};
writeFile();
//puls check q4
const getPost = (id) => {
    
        
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{
            console.log(response.data);
        })
        .catch((err)=>{
            throw err
        })
     
};

getPost(50);

app.listen(port, () => {
  console.log(`server run on port ${port}`);
});
