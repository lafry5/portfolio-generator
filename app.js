
const fs = require("fs");
const inquirer = require("inquirer");

// FORMER CODE
// const fs = require('fs');

const generatePage = require('./src/page-template.js');  // required to link to function in other modules

// const pageHTML = generatePage(portfolioData); This wasn't in the code before

// const profileDataArgs = process.argv.slice(2, process.argv.length);

// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

// or const [name, github] = profileDataArgs;


//   fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw err;
  
//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?'
//     }
//   ])
//   .then(answers => console.log(answers));  //what is the regular format for this??

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username'
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:'
      }
    ]); 
  };
  
//   promptUser().then(answers => console.log(answers));


    const promptProject = portfolioData => {
    console.log(`
  =================
  Add a New Project
  =================
  `);

       // If there's no 'projects' array property, create one
       if (!portfolioData.projects) {
        portfolioData.projects = [];

    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)'
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)'
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ]).then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
          } else {
            return portfolioData
            console.log(portfolioData);
          }
  });

  promptUser()
  // .then(promptProject)
  // .then(portfolioData => {
  //   const pageHTML = generatePage(portfolioData)});

    // fs.writeFile('./index.html', pageHTML, err => {
    //   if (err) throw new Error(err);

    //   console.log('Page created! Check out index.html in this directory to see it!');