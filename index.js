// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
let questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining your project.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
    default: 'Not Applicable'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What instruction do you have for the user to accurately use your project?',
    default: 'Not Applicable'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What licenses are required for this project?',
    choices: [
      'MITLicense',
      'GNUGPLv3',
      'ApacheLicense2.0',
      'ISCLicense'
    ]
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Who has contributed to this project?',
    default: 'Not Applicable'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the testing procedures for this project?',
    default: 'Not Applicable'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub Username?',
    default: 'https://github.com/'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your Email Address?',
    default: 'https://mail.google.com/'
  }
];

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((response) => {
    console.log(response);
    fs.writeFileSync('output/README.md', generateMarkdown(response));
  })
}
// Function call to initialize app
init();
