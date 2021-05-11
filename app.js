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
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      throw err;
    });
};

getPost(50);
//puls check q5
const getPostAsync = async (id) => {
  try {
    let response;
    response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    console.log(response);
  } catch (err) {
    throw err;
  }
};
getPostAsync(30);

//practice q1
const appendToFile = (data) => {
    fs.appendFile("./data.txt",data,(err)=>{
        if(err) throw err;
        console.log(`The ${data} was appended to file!`)
    })
  };
  appendToFile("hello")
app.listen(port, () => {
  console.log(`server run on port ${port}`);
});
