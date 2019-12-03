#!/usr/bin/env node

const mdLinks = require("./lib/index.js");

mdLinks(process.argv[2])
  .then(result => result.forEach(e => {
    console.log(e.link, "-", e.text.substring(0, 50));
  }))
  .catch((error)=>console.log(error));