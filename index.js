// References
// Most commonly used licenses
// 1. https://github.blog/2015-03-09-open-source-license-usage-on-github-com/

// Required packages
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
                message: 'What is the project title?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'What is the project description?',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What are the installation instructions?',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'How will this project be used?',
            },
            {
                type: 'list',
                name: 'license',
                message: 'Please select which license you are using:',
                choices: ['MIT', 'Apache', 'GPLv2', 'GPLv3', 'cc', 'wtfpl'],
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
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
            },
        ])
    // Passes responses into generateMarkdown.js
    .then((answers) => {
        writeToFile('README.md', generateMarkdown(answers));
    });
}

// Writes README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.log(err) : console.log('Successfully created README!')
    );
}

// Initializes application upon calling 'node index.js'
questions();
