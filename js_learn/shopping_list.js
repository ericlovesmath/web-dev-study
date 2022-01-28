"use strict"

// Input stdin
const inquirer = require("inquirer");

function printList(list) {
    console.log("===============\n Shopping List \n===============");
    for (let item in list) {
        console.log(`${list[item]} of ${item}`);
    }
    console.log("===============");
}

function addItem(list) {
    inquirer
        .prompt([
            {
                name: "item_select",
                type: "list",
                message: "Choose an option:",
                choices: Object.keys(list).concat(["New Item"]),
            },
            {
                name: "quantity",
                type: "number",
                message: "How many more ?",
                // message: `How many more (1-${Object.keys(list).length})`,
            },
        ])
        .then((answer) => {
            list[answer.item_select] += answer.quantity;
            printList(shopping_list);
        });
}

function removeItem(list, item, quantity = 1) {
    if (!item in list) console.log(`Error: ${item} not in List`);
    if (list[item] < quantity) console.log("Error: Quantity too large");
    if (list[item] < quantity) console.log("Error: Quantity too large");
    list[item] -= quantity;
}

function chooseOption(list) {
    inquirer
        .prompt([
            {
                name: "option_select",
                type: "list",
                message: "Choose an option:",
                choices: ["Add Item", "Remove Item"],
            },
        ])
        .then((answer) => {
            switch (answer.option_select) {
                case "Add Item":
                    addItem(list);
                    break;
                case "Remove Item":
                    removeItem(list);
                    break;
                default:
                    console.log("Error in selecting option");
            }
        });
}

function main() {
    let shopping_list = { "Apple": 1 };
    // addItem(shopping_list, "Apple");
    // addItem(shopping_list, "Banana", 3);
    // removeItem(shopping_list, "Banana", 1);
    printList(shopping_list);
    chooseOption(shopping_list);
}

main();
