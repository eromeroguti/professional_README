// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const readmeData = "This is my README file";

// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
        name: 'name',
        type: 'input',
        message: 'what is your name?',

    },
    {
        name: 'github',
        message: 'What is your Github username?',
        type: 'input'
    },
    {
        name: 'email',
        message: 'What is your email?',
        type: 'input'
    },

]).then((response) => {
    console.log(response);
    fs.writeFile(`${response.name}.json`, JSON.stringify(response, null, 2), (err) => {
        if (err) {
        console.log(err);
        return;
        }
        console.log('success!')
        }   
      );
    });


// TODO: Create a function to write README file
function writeReadmeFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) {
            console.error(err);
            return;
        }
        console.log(`README file ${filename} has been generated!`);
    });
}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
