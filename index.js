const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What is the installation process for the project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How does a user use your application?'
        },
        {
            type: 'input',
            name: 'license',
            message: 'What license does your application use?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who contributed to your project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What tests did you run on your project?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ])
    .then((data) => {
        console.log(data);
        const {title, description, installation, usage, license, contributing, tests, github, email} = data;
        const pageData = 
`# ${data.title}

## Description
${data.description}

## Table Of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Contact Me](#contact-me)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributors
${data.contributing}

## Tests
${data.tests}

## Contact Me
You can view my GutHub portfolio at https://github.com/${data.github} or you can email me at ${data.email}.`;
        fs.writeFile('README.md', pageData, (err) => err ? console.log(`Error: ${err}`) : console.log('Success!'));
    });
