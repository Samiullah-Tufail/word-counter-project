#! /usr/bin/env node
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "sentence",
        message: "enter you sentence",
        type: "input",
    },
]);
let sentence_Length = answers.sentence.split(" ").filter((element) => {
    return element.length !== 0;
});
console.log("the number of words is :", sentence_Length.length);
