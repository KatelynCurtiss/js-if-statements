// Katelyn Curtiss
// 14 May 2024
// JS IF Statements

// Open the instructions.md file in VS Code (click
// the icon in the top right corner of your screen 
// with the magnifying glass on it to view the markdown (.md) file)

// Add the code for your three demos here

//Demo #1
const firstName = 'Elisabeth';
console.log('Hello, ${fname}!')
 if (firstName.length > 7) {
    console.log('Wow, you really have a REALLY long name!');
 } 
//Demo #2
const fName = 'Nicholas';
console.log('Hello, ${fname}!')
 if (fName.length > 7) {
    console.log('Dude, you have a REALLY long nmae!');
 } else {
    console.log(`Your name isnt very long, ${fName}, is it`);
 }

 //Demo #3
 const age = parseInt(prompt('Enter your age: (Example: 16)'));

 if (age < 3) {
    const message = "You're still just a baby!";
 } else if (age < 18) {
    const message = "You're not yet an adult.";
 } else if (age < 100) {
    const message = "Almost at the centary mark!";
 } else {
    const message = "What an unusual age!";
 }

 console.log(message); 



// Comment out the previous demo code before running
// your current demo code