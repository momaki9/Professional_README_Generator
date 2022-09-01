// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
];

// TODO: Create a function to write README file

inquirer.prompt(questions)
  .then((answers) => {
    writeToFile();
    function writeToFile(fileName, data) {
      data = markdown.generateMarkdown(answers);
      fileName = "TESTING_README_TESTING.md"
      fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Your README.md file has been successfully created!')
      );
    }
    
  }
);

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();