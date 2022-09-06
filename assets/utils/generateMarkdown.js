
const link = "[![License](https://img.shields.io/badge/";

// function that returns a license badge based on which license is selected
function renderLicense(data) {
  if (data.license === 'Apache 2.0') {
    return link + 'License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } 
  if (data.license === "Boost") {
    return link + 'License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  } 
  if (data.license === "Eclipse") {
    return link + 'License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
  } 
  if (data.license === "IBM") {
    return link + 'License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
  } 
  if (data.license === "ISC") {
    return link + 'License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  } 
  if (data.license === "Mozilla") {
    return link + 'License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';

  } 
  if (data.license === "Unlicense") {
    return link + 'license-Unlicense-blue.svg)](http://unlicense.org/)';
  } 
}

// function renderLicenseLink(license) {}

// function to display license info in the readme based on license selected
function renderLicenseSection(data) {
  if (data.license === 'Apache 2.0') {
    return 'This application is covered under the Apache 2.0 License';
  } 
  if (data.license === "Boost") {
    return 'This application is covered under the Boost Software License 1.0';
  } 
  if (data.license === "Eclipse") {
    return 'This application is covered under the Eclipse Public License 1.0';
  } 
  if (data.license === "IBM") {
    return 'This application is covered under the IBM Public License Version 1.0';
  } 
  if (data.license === "ISC") {
    return 'This application is covered under the ISC License (ISC)';
  } 
  if (data.license === "Mozilla") {
    return 'This application is covered under the Mozilla Public License 2.0';

  } 
  if (data.license === "Unlicense") {
    return 'This application is unlicensed';
  } 
}

//function to generate markdown for README file
function generateMarkdown(data) {
  return `
# Project Title: ${data.title}

## Project Description: ${data.description}
## ${renderLicense(data)}

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

${renderLicenseSection(data)}

## Contributing

${data.contribution}

## Tests

${data.tests}

---
## Questions

If you have any questions, please visit my GitHub or send me an email.

[GitHub Link](https://github.com/${data.github})

[Email Me!](mailto:${data.email})
`
;
}

//exports these functions to be used by index.js file
module.exports = {
  generateMarkdown,
  renderLicense,
  renderLicenseSection
};
