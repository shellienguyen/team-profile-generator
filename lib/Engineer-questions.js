module.exports = [{
   type: "input",
   name: "engineerName",
   message: "Welcome to the Team Profile Generator. Input your engineer's name:",
   validate: engineerNameInput => {
      if ( engineerNameInput && engineerNameInput.trim().length > 0 ) {
         return true;
      }
      else {
         console.log( "Input your engineer's name:" );
         return false;
      };
   }
},
{
   type: "input",
   name: "engineerId",
   message: "Input your engineer's employee ID:",
   validate: engineerIdInput => {
      if ( engineerIdInput && engineerIdInput.trim().length > 0 ) {
         return true;
      }
      else {
         console.log( "Input your engineer's employee ID:" );
         return false;
      };
   }
},
{
   type: "input",
   name: "engineerEmail",
   message: "Input your engineer's email address:",
   validate: engineerEmailInput => {
      if ( engineerEmailInput && engineerEmailInput.trim().length > 0 ) {
         //if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test( engineerEmailInput )) {
         // Check for valid email address format
         if ( /^.+@.+\..+$/gi.test( engineerEmailInput )) {
            return true;
         };
      }
      else {
         console.log( "Input your engineer's email address:" );
         return false;
      };
   }
},
{
   type: "input",
   name: "enginnerGithubUsername",
   message: "Input your engineer's Github username:",
   validate: enginnerGithubUsernameInput => {
      if ( enginnerGithubUsernameInput && enginnerGithubUsernameInput.trim().length > 0 ) {
         return true;
      }
      else {
         console.log( "Input your engineer's Github username:" );
         return false;
      };
   }
}];