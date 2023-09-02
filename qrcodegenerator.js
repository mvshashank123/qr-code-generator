import inquirer from "inquirer";
import qr from "qr-image";
import * as fs from "node:fs";

inquirer
  .prompt([{ type: "input", name: "Enter the URL" }])
  .then((answer) => {
    const url = Object.values(answer);
    console.log('URL', url[0])
    const qrSvgImage = qr.image(url[0], { type: "svg" });
    qrSvgImage.pipe(fs.createWriteStream("newIcon.svg"));

    fs.writeFile("userInput.txt", url[0], (err) => {
        if(err) throw err;
      console.log("File has been saved!");
    });
  })
  .catch((err) => {
    console.log("Error", err);
  });
