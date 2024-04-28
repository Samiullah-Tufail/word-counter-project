#! /usr/bin/env node
import inquirer from "inquirer";
// import chalk from "chalk";

let answers = await inquirer.prompt([
  {
    name: "sentence",
    message: "enter you sentence",
    type: "input",
  },
]);

let sentence_Length = answers.sentence.split(" ").filter((element: any) => {
  return element.length !== 0;
});

console.log("the number of words is :", sentence_Length.length);
