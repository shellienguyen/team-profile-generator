module.exports = [{
   type: "input",
   name: "managerName",
   message: "Welcome to the Team Profile Generator. Input your manager's name:",
   validate: managerNameInput => {
      if ( managerNameInput && managerNameInput.trim().length > 0 ) {
         return true;
      }
      else {
         console.log( "Input your manager's name:" );
         return false;
      };
   }
},
{
   type: "input",
   name: "managerId",
   message: "Input your manager's employee ID:",
   validate: managerIdInput => {
      if ( managerIdInput && managerIdInput.trim().length > 0 ) {
         return true;
      }
      else {
         console.log( "Input your manager's employee ID:" );
         return false;
      };
   }
},
{
   type: "input",
   name: "managerEmail",
   message: "Input your manager's email address:",
   validate: managerEmailInput => {
      if ( managerEmailInput && managerEmailInput.trim().length > 0 ) {
         return true;
      }
      else {
         console.log( "Input your manager's email address:" );
         return false;
      };
   }
},
{
   type: "input",
   name: "managerOfficeNum",
   message: "Input your manager's office number:",
   validate: managerOfficeNumInput => {
      if ( managerOfficeNumInput && managerOfficeNumInput.trim().length > 0 ) {
         return true;
      }
      else {
         console.log( "Input your manager's office number:" );
         return false;
      };
   }
},
{
   type: "list",
   name: "menuChoices",
   message: "Please choose an option below:",
   choices: [ "Add an Engineer Profile", "Add an Intern Profile", "Done Generating Profiles" ],
   validate: menuChoicesInput => {
      if ( menuChoicesInput === "Add an Engineer Profile" || menuChoicesInput === "Add an Intern Profile" ) {
         return true;
      }
      else if( menuChoicesInput === "Done Generating Profiles" ) {
         return true;
      }
      else {
         console.log( "Please choose an option below:" );
         return false;
      };
   }
}];