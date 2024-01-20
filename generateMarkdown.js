// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return ""
  }
};

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
  return `[Click here for license information.](https://choosealicense.com/licenses/)`
  } else {
    return ""
  }
};

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 return ` ${renderLicenseBadge(license)} \n
  ${renderLicenseLink(license)}`;
};

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents

* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributors](#contributors)

* [Tests](#tests)

* [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage 
${data.usage}

## License 
${renderLicenseSection(data.license)}

## Contributors
${data.contributors}

## Tests 
${data.tests}

## Questions 
Please see GitHub and contact information below for any additional questions. \n
GitHub Username: ${data.GitHubUsername} \n
[GitHub Profile](https://github.com/${data.GitHubUsername}) \n
Email address: ${data.email} \n
`;
};

module.exports = {
  generateMarkdown,
  renderLicenseSection
};