// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdownJS = require("./generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },

    {
        type: "input",
        message: "Please enter a description of your project.",
        name: "description"
    },

    {
        type: "input",
        message: "...",
        name: "tableOfContents"
    },

    {
        type: "input",
        message: "...",
        name: "installation"
    },

    {
        type: "input",
        message: "Please describe the usage of your project.",
        name: "usage"
    },

    {
        type: "input",
        message: "...",
        name: "license"
    },

    {
        type: "input",
        message: "Add any contributors to your project here.",
        name: "contributors"
    },

    {
        type: "input",
        message: "...",
        name: "tests"
    },

    {
        type: "input",
        message: "...",
        name: "questions"
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName) {
inquirer
.prompt(questions)
 
.then((response) => {
    fs.writeFile(fileName, generateMarkdownJS.generateMarkdown(response), (err) =>
    err ? console.error(err) : console.log('Success!')
)});
};

writeToFile("README.md");

// // TODO: Create a function to initialize app
// function init() {
// };

// // Function call to initialize app
// init();
