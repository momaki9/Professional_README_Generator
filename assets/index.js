//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');

//an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'In a few sentences, describe this project.',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Describe how to install/deploy the application in this project.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions on how to use the application.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select a license for your project. (Use arrow keys and enter to select.)',
      choices: ["Apache 2.0", "Boost", "Eclipse", "IBM", "ISC", "Mozilla", "Unlicense"]
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'If you would like other developers to contribute to your project, please describe the guidelines for how to do so.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'If you wrote tests for your application, please describe how to run them.',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub Username.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address.',
    },
];

//Uses prompt answers to generate the README file
inquirer.prompt(questions)
  .then((answers) => {
    writeToFile();
    function writeToFile(fileName, data) {
      data = markdown.generateMarkdown(answers);
      fileName = "ReadME.md"
      fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Your README.md file has been successfully created!')
      );
    }
    
  }
);


// function init() {}
// init();