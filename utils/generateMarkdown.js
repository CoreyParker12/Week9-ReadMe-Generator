// REFERENCES
// For license badges
// 1. https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba


// Generates markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}  

  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

## Project Description

  ${data.description}

## Table of Contents

  * [Installation Instructions](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

## Installation Instrutions

  ${data.installation}

## Usage

  ${data.usage}

## License

  This project is licensed under the terms of the ${data.license} license.  

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

My GitHub: [${data.github}](https://github.com/${data.github})  
Email: ${data.email}

[Video Walkthrough](https://drive.google.com/file/d/1CWS4xZKjWYAZikvwuJEVe5KKXcTorMPz/view?usp=sharing)
`;
}

// Exports for use if other js files
module.exports = generateMarkdown;
