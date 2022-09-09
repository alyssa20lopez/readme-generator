// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: "What is the name of your project?"
    },
    {
      type: 'input',
      name: 'table of contents',
      message: "Provide a table of contents"
    },
    {
      type: 'input',
      name: 'description',
      message: "Provide a short description explaining your project."
    },
    {
      type: 'input',
      name: 'installation',
      message: "What are the steps required to install your project?"
    },
    {
      type: 'input',
      name: 'usage',
      message: "What instruction do you have for the user to accurately use your project?"
    },
    {
      type: 'input',
      name: 'credits',
      message: "Who were the collaborators on this project?"
    },
    {
      type: 'input',
      name: 'license',
      message: "What licenses are required for this project?"
    },
  ])
  .then((response) => console.log(response));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
