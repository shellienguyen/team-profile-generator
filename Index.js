// Application dependencies
const fs = require( "fs" );
const inquirer = require( "inquirer" );

const Manager = require( "./lib/Manager" );
const Engineer = require( "./lib/Engineer" );
const Intern = require( "./lib/Intern" );

const addEmployeeQuestion = require( "./lib/add-employee-questions" );
const managerQuestions = require( "./lib/manager-questions" );
const engineerQuestions = require( "./lib/engineer-questions" );
const internQuestions = require( "./lib/intern-questions" );
const holdHtml = require( "./lib/html-template" );

// Array to hold team members.
let teamProfileArr = [];

////////////////////////////////////////////
////////////////////////////////////////////

// This function writes the output HTML file.
const writeToFile = ( holdHtmlArr ) => {
   return new Promise(( resolve, reject ) => {
      outputFileName = teamProfileArr[ 0 ].toLowerCase();
      outputFileName = outputFileName.replace( / /g, "-" );

      fs.writeFile( `./dist/${outputFileName}.html`, holdHtmlArr.join( "" ), function( err ) {
         // If there's an error, reject the Promise and send the error to the 
         // Promise's `.catch() ` method.
         if ( err ) {
               reject( err );
            // Return ouf of the function here to make sure the Promise doesn't
            // accidentally execute the resolve() function as well.
            return;
           };

         // If everything went well, resolve the Promise and send the succesful
         // data to the `.then()` method.
         resolve({
               ok: true,
               message: 'File created! Your output HTML file is located in the "dist" folder.' 
           });
       });
   });
};

////////////////////////////////////////////
////////////////////////////////////////////

// Generate HTML file.
function generateHtmlFile() {
   const holdHtmlArr = holdHtml.generateHtml( teamProfileArr );
   writeToFile( holdHtmlArr );
};

// Add the intern profile to the teamProfileArr array.
function addInternProfile() {
   inquirer.prompt( internQuestions )
   .then ( function( data ) {
      const internName = data.internName;
      const internId = data.internId;
      const internEmail = data.internEmail;
      const internSchool = data.internSchool;
      const teamMember = new Intern( internName, internId, internEmail, internSchool );

      teamProfileArr.push( teamMember );

      // Populate the menu choices again to see what the user wants to do next.
      addNonManagerTeamMember();
   });
};

////////////////////////////////////////////
////////////////////////////////////////////

// Add the engineer profile to the teamProfileArr array.
function addEngineerProfile() {
   inquirer.prompt( engineerQuestions )
   .then ( function( data ) {
      const engineerName = data.engineerName;
      const engineerId = data.engineerId;
      const engineerEmail = data.engineerEmail;
      const engineerGithubUsername = data.engineerGithubUsername;
      const teamMember = new Engineer( engineerName, engineerId, engineerEmail, engineerGithubUsername );
      
      teamProfileArr.push( teamMember );

      // Populate the menu choices again to see what the user wants to do next.
      addNonManagerTeamMember();
   });
};

////////////////////////////////////////////
////////////////////////////////////////////

// Populate the menu choices again to see what the user wants to do next.
// Call the appropriate function based on the user's choice.
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
            generateHtmlFile();
         break;
      };
   });
};

////////////////////////////////////////////
////////////////////////////////////////////

// Add the engineer profile to the teamProfileArr array.
function addManagerProfile() {
   inquirer.prompt( managerQuestions )
   .then( function( data ) {
      const managerName = data.managerName;
      const managerId = data.managerId;
      const managerEmail = data.managerEmail;
      const managerOfficeNum = data.managerOfficeNum;
      const teamMember = new Manager( managerName, managerId, managerEmail, managerOfficeNum );
      
      teamProfileArr.push( teamMember );

      // Populate the menu choices again to see what the user wants to do next.
      addNonManagerTeamMember();
   });
};

////////////////////////////////////////////
////////////////////////////////////////////

// Start the application by displaying a welcome message.
// Then populate prompts to get the user input for the manager profile.
function init() {
   inquirer.prompt([
      {
         message: "Welcome to the Team Profile Generator.  Input your team name:",
         name: "teamName",
         validate: teamNameInput => {
            if ( teamNameInput && teamNameInput.trim().length > 0 ) {
               return true;
            }
            else {
               console.log( "Input your team name:" );
               return false;
            };
         }
      }
   ])
   .then( function( data ) {
      const teamName = data.teamName;
      teamProfileArr.push( teamName );
      addManagerProfile();
   });
};

////////////////////////////////////////////
////////////////////////////////////////////

// Function call to initialize application.
init();