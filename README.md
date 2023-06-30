# SVG-Logo-Maker
## Description:
The application enables users to enter inputs into a inquirer prompt in order to generate a logo "logo.svg" file which contains the users desired results as an SVG image.

## Table of Contents:
- [The Challenge](#The-Challenge)
- [Usage Information](#Usage-Information)
- [Installation Process](#Installation-Process)
- [Built With](#Built-With)
- [What I Learned](#What-I-Learned)
- [Continued Development](#Continued-Development)
- [License](#License)
- [Author](#Author)
- [Acknowledgments](#Acknowledgments)

# Overview

## The Challenge:
Build a Node.js command-line application that takes in user inputs to generates a SVG logo and saves it as "logo.svg" file. In addition, create a walkthrough video that demonstrates its functionality and the passing of all of the tests.


## User Story
```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Usage Instructions
1. Open the cloned repository in any source code editor e.g. Visual Studio Code.
2. Open integrated terminal on index.js
3. Enter “node index.js” in the command line
4. Through sequential order within the command line interface - the user will be presented with npm inquirer questions - the user will provide a response to each question and proceed.
5. Once completed a SVG file named "logo.svg" will be created.
6. At your discretion, you may rename the "logo.svg" file to the file name of your choice.
7. (Optional) Regarding future use, you may alter the prompted questions within the index.js to best suit your needs.
8. (Optional) The SVG Logo Maker serves as a foundation so you are not limited to altering the files (as you have my permission) to create the best possible "logo.svg" file.

## Solution URL:
[Solution URL Link:](https://github.com/annemarywynter1986/SVG-Logo-Maker.git)

## Walkthrough Video:
[Click Here to Watch](https://drive.google.com/file/d/1vszkYmcVkDdqjsNl7TjwWj6vGuHz8m4X/view?usp=sharing)

## Screenshots:
### Figure 1. Command line application
![image](https://github.com/annemarywynter1986/SVG-Logo-Maker/assets/130412307/815926b1-e38f-4d1a-9048-c11d74fc0c64)

![Untitled design (8)](https://github.com/annemarywynter1986/SVG-Logo-Maker/assets/130412307/54843d89-8d0b-4841-b227-a1745475ab32)


### Figure 2. Jest Testing "npm test"
![jest screenshot](https://github.com/annemarywynter1986/SVG-Logo-Maker/assets/130412307/63408d05-4aca-4f21-97c8-a726ba66d12c)

![Untitled design (7)](https://github.com/annemarywynter1986/SVG-Logo-Maker/assets/130412307/92893811-3aa6-4fe0-8b25-06fda0b63e6d)




## Installation Process
1. Clone the repository: https://github.com/annemarywynter1986/SVG-Logo-Maker.git
2. Install the following: 
- Node.JS [Version 16.18.1](https://nodejs.org/en/blog/release/v16.18.1/)
- Jest [Version 29.4.3](https://www.npmjs.com/package/jest)
- Inquirer.js: [Version 8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4)
3. Open the cloned repository in any source code editor.
4. Open the integrated terminal for the document and complete the respective installation guides provided above in section (2.) to ensure the cloned documentation will operate.

## Built With
- Dynamic JavaScript
- Jest [Version 29.4.3](https://www.npmjs.com/package/jest)
- Inquirer.js: [Version 8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4)
- Visual Studio Code: [Website](https://code.visualstudio.com/)

## What I Learned
- Create an non-deployed application that invokes a “node index.js” in the command line to generate a logo and save it as a SVG file.
- Learned the JavaScript testing framework "Jest".
### Continued Development:
1. Contniue creating SVG files to practice
2. Add more user prompts to create more possibilities among a rendered SVG image
