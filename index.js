// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js");

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
function writeToFile(fileName, data) {
    inquirer
        .prompt(questions)
        .then(generateMarkdown({ title, description, tableOfContents, installation, usage, license, contributors, tests, questions }));
    
        fs.writeFile("README.md", , (err) =>
        err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
