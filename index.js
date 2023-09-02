console.log("Hello from Node!");

//Native Node Modules: Applications or modules or functionality which are prebundled with Node
//File system: Native node module which allows us to access the files from the system.

import * as fs from "node:fs"; //ECMAScript way to import
//const fs = require("fs"); //Common JS way

// fs.writeFile("message.txt", "HELLO FROM NODE.JS", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("Reading file", data);
});

import generateName from "sillyName"; //ECMAScript way to import
//const generateName = require('sillyname'); //Common JS

const sillyName = generateName();

console.log(`My name is ${sillyName}`);

import superheroes from "superheroes";

const randomSuperhero = superheroes.random();

console.log("Random Superhero is", randomSuperhero,'!!');
