#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.redBright.bold.italic("\n\t RAMZAN CODING NIGHT PROJECT CURRENCY CONVERTER\n"));


//currencies list and exchange rate
let exchange_rate: any = {
    "USD": 1, 
    "EUR": 0.94,
    "JYP": 153.28,
    "CAD": 1.38,
    "AUD": 1.54,
    "PKR": 277.70
}
// promt the user to enter the amount and the currency
let user_answer = await inquirer.prompt([{
    name: "from_currency",
    type: "list",
    message: "Enter the amount currency to convert from:",
    choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency convert init:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
//convert the amount from one currency to another and this formula
let from_amount =exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;

//convertion formula
let base_amount = amount /from_amount
let converted_amount = base_amount * to_amount

//converted amount disply
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);
