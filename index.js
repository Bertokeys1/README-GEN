// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [{
    type:"input", 
    message:"what is the project title?",
    name:"title",
    },
    {
        type:"input",
        message:"what is the project description?",
        name:"description",
    },
    {
        type:"input",
        message:"how do you install the application",
        name:"installation",
    },
    {
        type:"input",
        message:"what will this be used for?",
        name:"usage",
    },
    {
        type:"input",
        message:"what license does this need?",
        name:"license",
    },
    {
        type:"input",
        message:"who contributed to the project?",
        name:"contribution",
    },
    {
        type:"input",
        message:"how do you test the application",
        name:"test",
    },
    {
        type:"input",
        message:"Enter email to send questions.",
        name:"email",
    },
    {
        type:"input",
        message:"what is your github username?",
        name:"github",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(response){
        fs.writeFileSync("./README.md", generateMarkdown(response))
    })
}

// Function call to initialize app
init();
