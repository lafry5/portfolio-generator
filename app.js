const fs = require('fs');

const generatePage = require('./src/page-template.js');  // required to link to function in other modules


const profileDataArgs = process.argv.slice(2, process.argv.length);

const name = profileDataArgs[0];
const github = profileDataArgs[1];

// or const [name, github] = profileDataArgs;


  fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });
