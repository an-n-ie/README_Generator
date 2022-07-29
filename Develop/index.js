// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown= require("./utils/generateMarkdown")
const fs=require('fs') 
// TODO: Create an array of questions for user input
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is the title of your project?"
    },
    {
        type:"input",
        name:"description",
        message:"Provide a short description explaining the what, why, and how of your project:"
    },
    {
        type:"input",
        name:"toc",
        message:"Add a table of contents:"
    },
    {
        type:"input",
        name:"installation",
        message:"What are the steps required to install your project?"
    },
    {
        type:"input",
        name:"usage",
        message:"Provide instructions and examples for use:"
    },
    {
        type:"list",
        name:"license",
        message:"Choose a license:",
        choices:["GNU AGPLv3","GNU GPLv3","GNU LGPLv3","Mozilla","Apache","MIT","Boost Software","Other"]
    },
    {
        type:"input",
        name:"contributing",
        message:"Include guidelines for how others can contribute to your work:"
    },
    {
        type:"input",
        name:"tests",
        message:"Write tests for your application then provide examples on how to run them:"
    },
    {
        type:"input",
        name:"questions",
        message:"Questions concerning your project:"
    },
];
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
