// Populate menu choices to ask the user on what to do next.
module.exports = [
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