// Application dependencies
const fs = require( "fs" );
const inquirer = require( "inquirer" );

const Employee = require( "./lib/Employee" );
const Manager = require( "./lib/Manager" );
const Engineer = require( "./lib/Engineer" );
const Intern = require( "./lib/Intern" );

const employeeQuestions = require( "./lib/Employee-questions" );
const managerQuestions = require( "./lib/Manager-questions" );
const engineerQuestions = require( "./lib/Engineer-questions" );
const internQuestions = require( "./lib/Intern-questions" );

// Get user input
const promptUser = () => {
   return inquirer.prompt( managerQuestions );
};

// Generate HTML file
function generateHtml( data ) {
   console.log( "inside generateHtml()" );
};

function writeToFile() {
   console.log( "inside writeToFile()" );
}

// Initialize the application
function init() {
   promptUser()
   .then( data => {
       writeToFile( generateHtml( data ));
   });
};

// Function call to initialize application
init();