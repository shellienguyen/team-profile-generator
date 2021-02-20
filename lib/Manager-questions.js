module.exports = [{
   type: "input",
   name: "managerName",
   message: "Input your manager's name:",
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
         // Check for valid email address format
         if ( /^.+@.+\..+$/gi.test( managerEmailInput )) {
            return true;
         };
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
}];