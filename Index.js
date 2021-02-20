// Application dependencies
const fs = require( "fs" );
const inquirer = require( "inquirer" );

const Employee = require( "./lib/Employee" );
const Manager = require( "./lib/Manager" );
const Engineer = require( "./lib/Engineer" );
const Intern = require( "./lib/Intern" );

const addEmployeeQuestion = require( "./lib/add-employee-questions" );
const managerQuestions = require( "./lib/manager-questions" );
const engineerQuestions = require( "./lib/engineer-questions" );
const internQuestions = require( "./lib/intern-questions" );

let teamProfileArr = [];

// Generate HTML file
function generateHtml( data ) {
   console.log( "inside generateHtml()" );
};

function writeToFile() {
   console.log( "inside writeToFile()" );
}

function addInternProfile() {
   inquirer.prompt( internQuestions )
   .then ( function( data ) {
      const internName = data.internName;
      const internId = data.internId;
      const internEmail = data.internEmail;
      const internSchool = data.internSchool;
      const teamMember = new Intern( internName, internId, internEmail, internSchool );

      teamProfileArr.push( teamMember );

      addNonManagerTeamMember();
   });
};

function addEngineerProfile() {
   inquirer.prompt( engineerQuestions )
   .then ( function( data ) {
      const engineerName = data.engineerName;
      const engineerId = data.engineerId;
      const engineerEmail = data.engineerEmail;
      const engineerGithubUsername = data.engineerGithubUsername;
      const teamMember = new Engineer( engineerName, engineerId, engineerEmail, engineerGithubUsername );
      
      teamProfileArr.push( teamMember );

      addNonManagerTeamMember();
   });
};

function addNonManagerTeamMember() {
   inquirer.prompt( addEmployeeQuestion )
   .then( function( data ) {
      switch ( data.menuChoices ) {
         case "Add an Engineer Profile":
            addEngineerProfile();
            break;
         case "Add an Intern Profile":
            addInternProfile();
            break;
         case "Done Generating Profiles":
            generateHtml();
         break;
      };
   });
};

function addManagerProfile() {
   inquirer.prompt( managerQuestions )
   .then( function( data ) {
      const managerName = data.managerName;
      const managerId = data.managerId;
      const managerEmail = data.managerEmail;
      const managerOfficeNum = data.managerOfficeNum;
      const teamMember = new Manager( managerName, managerId, managerEmail, managerOfficeNum );
      
      teamProfileArr.push( teamMember );

      addNonManagerTeamMember();
   });
};

function init() {
   inquirer.prompt([
      {
         message: "Welcome to the Team Profile Generator.  Input your team name:",
         name: "teamName"
      }
   ])
   .then( function( data ) {
      const teamName = data.teamName;
      teamProfileArr.push( teamName );
      addManagerProfile();
   });
};

// Function call to initialize application
init();