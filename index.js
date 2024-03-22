#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumbar = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumbar",
        type: "number",
        message: "Please guess a numbar between 1-6:",
    },
]);
if (answers.userGuessedNumbar === randomNumbar) {
    console.log("congtratulation! you guessed right a numbar ");
}
else {
    console.log("you gussed wrong numbar");
}
