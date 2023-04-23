// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const readmeData = ("This is my README file");
const {InputQuestion} = require("../Develop/utils/Question")

// TODO: Create an array of questions for user input
const askQuestions = () => { inquirer.prompt([
    new InputQuestion("test","How do you test your app?"),
    // new ListQuestion("license", "WHat whill your license be", ["No Licence", "MIT"]),
    {
        name: 'name',
        type: 'input',
        message: 'what is your name?',

    },
    {
        name: 'description',
        message: 'Please describe your project',
        type: 'input'
    },
    {
        name: 'github',
        message: 'What is your Github username?',
        type: 'input'
    },
    {
        name: ' installation',
        message: 'How should this application be installed',
        type: 'input'
        
    },
    {
        name: 'email',
        message: 'What is your email?',
        type: 'input'
    },
    {
        name: 'title',
        message: 'What is your title?',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'Primary use of this application',
        type: 'input'
    },
    {
        name: 'credits',
        message: 'Acknowledge who contributed to this project',
        type: 'input'
    },
   
]).then((response) => {
    console.log(response);

    //response is an object
    var template = generateMarkdown(response)

    //
    fs.writeFile(`README.md`,template, (err) => {
        if (err) {
        console.log(err);
        return;
        }
        console.log('success!')
        }   
      );
    });
}

askQuestions()

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
