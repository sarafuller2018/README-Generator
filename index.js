// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdownJS = require("./generateMarkdown.js");

// Create an array of questions for user input
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
        message: "Please provide installation instructions for your project.",
        name: "installation"
    },

    {
        type: "input",
        message: "Please describe the usage of your project.",
        name: "usage"
    },

    {
        type: "list",
        message: "Please select a license for the project",
        name: "license",
        choices: ["MIT","ISC","APACHE","GPL", "none"]
    },

    {
        type: "input",
        message: "Please add any contributors to your project.",
        name: "contributors"
    },

    {
        type: "input",
        message: "Please enter test instructions for your project.",
        name: "tests"
    },

    {
        type: "input",
        message: "What is your GitHub username?",
        name: "GitHubUsername"
    },

    {
        type: "input",
        message: "What is your email addresss?",
        name: "email"
    },

];

// Create a function to write README file
function writeToFile(fileName) {
inquirer
.prompt(questions)
.then((response) => {
    fs.writeFile(fileName, generateMarkdownJS.generateMarkdown(response), (err) =>
    err ? console.error(err) : console.log('Success!')
)});
};

writeToFile("GeneratedREADME.md");