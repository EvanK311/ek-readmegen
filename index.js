// install Inquirer
const inquirer = require("inquirer");
const fs = require("fs");
// require all the depencies I'll need - inquirer, fs

// create array of questions to prompt user
function generateHTML(ansData) { }

inquirer.prompt([
    {
        type: "input",
        message: "Enter the project title.",
        name: "title"
    },
    {
        type: "input",
        message: "Describe the project",
        name: "description"
    },
    {
        type: "input",
        message: "Table of Contents",
        name: "contents"
    },
    {
        type: "input",
        message: "What nodes to install?",
        name: "installs"
    },
    {
        type: "input",
        message: "enter GitHub URL",
        name: "usage"
    },
    {
        type: "input",
        message: "enter GitHub URL",
        name: "license"
    },
    {
        type: "input",
        message: "enter GitHub URL",
        name: "contributing"
    }, {
        type: "input",
        message: "enter GitHub URL",
        name: "Tests"
    }, {
        type: "input",
        message: "enter GitHub URL",
        name: "questions"
    },

])
// write a readME in a markdown file for a template reference

// function that will generate readme template

// use inquirer to prompt users with questions. (questions in homework readme)

// user answers that inquirer returns and pass them to readME generator function

// write file using template generated from readME function

