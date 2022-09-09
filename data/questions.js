// TODO: Create an array of questions for user input
module.exports [
  {
    type: 'input',
    name: 'title',
    message: "What is the name of your project?"
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
    type: 'list',
    name: 'license',
    message: "What licenses are required for this project?",
    choice: [
      'MIT License',
      'GNU GPLv3',
      'Apache License 2.0',
      'ISC License'
    ]
  },
  {
    type: 'input',
    name: 'contribution',
    message: "Who has contributed to this project?",
    default: 'Not Applicable'
  },
  {
    type: 'input',
    name: 'tests',
    message: "What are the testing procedures for this project?"
  },
  {
    type: 'input',
    name: 'questions',
    message: "What is your GitHub Username?",
    default: 'https://github.com/'
  },
  {
    type: 'input',
    name: 'questions',
    message: "What is your Email Address?",
    default: 'https://mail.google.com/'
  }
];