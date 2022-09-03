
const okbadge = `![License](https://img.shields.io/badge/`;
const nobadge = "nothing was chosen OR choose me was chosen"

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === 'choose me!') {
    return nobadge;
  } 
  if (data.license === "testo") {
    return okbadge;
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
# ${data.license}
## Project Description: ${data.description}

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

---
## Installation

${data.install}

## Usage

${data.usage}

## License

## Contributing

${data.contribution}

## Tests

${data.tests}

---
## Questions
[GitHub Link](https://github.com/${data.github})

[Email Me!](mailto:${data.email})
`
;
}

// module.exports is an object we use to store variables or methods
module.exports = {generateMarkdown};
