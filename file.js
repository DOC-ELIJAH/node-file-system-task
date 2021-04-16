const fs = require("fs");

const directory = require("path");

const fetch = require("node-fetch");

const url = "http://jsonplaceholder.typicode.com/posts";

const getData = async () => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  const filePath = directory.join(__dirname, "result/", "posts.txt");
  fs.writeFile(filePath, JSON.stringify(data), (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Wrote to file successully!");
    }
  });
};
getData();
