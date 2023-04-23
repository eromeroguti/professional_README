// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(licnese !== 'none')
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //data is an object
  return `# ${data.title}

  ## Table of Contents
  * [Descrition](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${data.problem}

  ## Credits
  ${data.credits}

  ## Information
  Any additional information feel free to email me at ${data.email}
  Other repos or porfolios, please visit my github [here](www.github.com/${data.github})

`
};

module.exports = generateMarkdown;
