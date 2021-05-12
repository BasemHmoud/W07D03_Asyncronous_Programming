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
//use to add data in file
const appendToFile = (data) => {
  //appendFile have 3 parameter :path , data , CB
  fs.appendFile("./data.txt", data, (err) => {
    if (err) throw err;
    console.log(`The ${data} was appended to file!`);
  });
};
//call function and send data
appendToFile(" hello every body");

//practice q2

const copyFile = (fileName) => {
  //fileName اسم الملف مراد نسخه
  //copy_of_data.txt انشاء ملف  اسمه
  fs.copyFile(fileName, `copy_of_${fileName}`, (err) => {
    if (err) throw err;
    console.log("successfully");
  });
};
copyFile("data.txt");

//practice q3
const post = JSON.stringify({
  title: "JavaScript Basics",
  body: "This post contains information about javaScript ",
  // the id of the user who is going to create the post
  userId: 1,
});
//get =select
//post =insert
//put=update
//delete=delete
const createPost = (post) => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", post)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      throw err;
    });
};
createPost(post);

//practice q4
const newPost = JSON.stringify({
  // the post id that we want to update, change it when trying to update another post
  id: 1,
  title: "Updated Title",
  body: "Updated body",
  userId: 1,
});

const updatePost = (postId, data) => {
  axios
    .put(`https://jsonplaceholder.typicode.com/posts/${postId}`, data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      throw err;
    });
};
updatePost(1, newPost);
app.listen(port, () => {
  console.log(`server run on port ${port}`);
});
