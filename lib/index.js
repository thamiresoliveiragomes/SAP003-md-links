const fs = require("fs");

function mdLinks(path) {
  const regex = /([^[]+)\](\([^)]*)/gm;
  return new Promise ((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject("erro: Arquivo não encontrado");
      } else {
        const matches = data.match(regex);
        if (matches == null) {
          reject("erro: Links não encontrado");
        } else {
          const result = matches.map(e => {
            const split = e.split("](");
            const text = split[0].replace("\n ", "");
            const link = split[1];
            return {text, link};
          });
          resolve(result);
        }
      }
    });
  });
}

module.exports = mdLinks;