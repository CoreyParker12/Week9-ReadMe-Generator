// Packages

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// Array of questions to be passed to the user

const questions = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Project title? ',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Project description? ',
            },
            {
                type: 'input',
                name: 'ToC',
                message: 'Table of Contents? ',
            },
            {
                type: 'input',
                name: 'Iinstallation',
                message: 'What are the installation instructions? ',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'How will this project be used? ',
            },
            {
                type: 'input',
                name: 'license',
                message: 'Please select which license you are using:',
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'What are the contribution guidelines?',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'What are the test instructions?',
            },
        ])
    .then((answers) => {
        writeToFile('README.md', generateMarkdown(answers));
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.log(err) : console.log('Successfully created README!')
    );
}

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();
