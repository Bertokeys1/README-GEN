// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license != "") {
    return `
[<img src="https://img.shields.io/badge/license-${license}-COLOR.svg?logo=LOGO">](<https://opensource.org/licenses/${license}>)`
  } else {
    return ""
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 
  if (license != "") {
    return `
* [License](#license)`
  } else {
    return ""
  }
 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
   
  if (license != "") {
    return `  
## License
This application is covered under the ${license} license.`
  } else {
    return ""
  }
 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents 
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Credits](#contribution)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Contribution
${data.contribution}
## Tests
${data.test}
## Questions
<a href="https://github.com/${data.github}">github profile</a>

<a href="mailto:${data.email}">Contact me</a>


`;
}

module.exports = generateMarkdown;
