// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'Project Title',
            message: 'Project title? ',
        },
        {
            type: 'input',
            name: 'Project Description',
            message: 'Project description? ',
        },
        {
            type: 'input',
            name: 'ToC',
            message: 'Table of Contents? ',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'What are the installation instructions? ',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'How will this project be used? ',
        },
        {
            type: 'input',
            name: 'License',
            message: 'Please select which license you are using:',
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'What are the contribution guidelines?',
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'What are the test instructions?',
        },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
