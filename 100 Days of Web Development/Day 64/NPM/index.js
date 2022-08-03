// const chalk = require('chalk'); is used when type:module is not specified in package.json
console.log(chalk.green.underline('Saurav Navdhare'));
console.log(chalk.blue.italic('I am learning Node Package Manager'));
console.log(chalk.red.inverse('Inverse will color the background'));
//to use latest chalk, set the type: module in package.json and use import <variable> from 'chalk'
console.log(chalk.bgRed(false));
console.log(chalk.bgGreen.bold(true)); //bold to bold the text

//Using validator package
console.log("\n\nValidator Starts here\n")
import validator from 'validator';
console.log(validator.isEmail('xyz@abc.com'));
console.log(validator.isURL('https://www.GitHub.com'));
console.log(validator.isMobilePhone("+911000000001", "en-IN"));