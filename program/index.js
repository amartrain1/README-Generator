const inquirer = require('inquirer');
const fs = require('fs');

function getBadgeIcon(name) {
    const badges = {
        mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
        boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    }
    return badges[name];
};

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
`# ${title}
${getBadgeIcon(license.toLowerCase())}

## Table Of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Contact Me](#contact-me)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## License
This project makes use of the ${license} license.

## Contributors
${contributing}

## Tests
${tests}

## Contact Me
You can view my GutHub portfolio at https://github.com/${github} or you can email me at ${email}.`;
        fs.writeFile('README.md', pageData, (err) => err ? console.log(`Error: ${err}`) : console.log('Success!'));
    });
