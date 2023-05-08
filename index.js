// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
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
        name: 'table-of-contents',
        message: 'What is your table of contents?'
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
];

// get a prompt on questions defined above
askQuestions = () => {
    return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    askQuestions()
        .then((answers) => writeToFile('README.md', answers))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.log(`Error: ${err}`));
}

// Function call to initialize app
init();
askQuestions();
