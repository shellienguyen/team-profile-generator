const Employee = require( "./Employee" );

class Engineer extends Employee {
   constructor( name, id, email, githubUsername ) {
      // Call on the parent Employee class constructor
      super( name, id, email );
      this.githubUsername = githubUsername;
      this.role = "Engineer";
   };

   getGithubUsername() {
      return this.githubUsername;
   };

   getRole() {
      return this.role;;
   };
};

module.exports = Engineer;