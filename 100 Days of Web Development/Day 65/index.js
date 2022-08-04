/*Nodemon watches the extension first then the filename
=> if in case if only one js file is there and we mistype its name but give .js extension'
then the file will be started by nodemon
it will just show an error that the file DNE and will run the only .js file*/ 
//nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
//here i have tried nodemon idx.js and it showed an error but executed index.js
console.log("File executed with wrong name");
//nodemon will reload the file when it detects a change in the file or every time file is saved

//To delay restart we can use the command 'nodemon --delay <time in sec (or <time> ms form milliseconds)> server.js'

//learnt how node js functions under a wrapper function