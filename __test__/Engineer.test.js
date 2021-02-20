const Engineer = require( "../lib/Engineer" );

////////////////////////////////////////////
////////////////////////////////////////////

test( "Set engineer's Github username.", () => {
   const testGithutUsername = "shellienguyen";
   const engineer = new Engineer( "Shellie", 38475, "Shellie@Shellie.com", testGithutUsername );

   expect( engineer.githubUsername ).toBe( testGithutUsername );
});

////////////////////////////////////////////
////////////////////////////////////////////

test( "Get Github account using getGithub().", () => {
   const testGithubUsername = "shellienguyen";
   const engineer = new Engineer( "Shellie", 39482, "Shellie@Shellie.Com", testGithubUsername );

   expect( engineer.getGithubUsername()).toBe( testGithubUsername );
});

////////////////////////////////////////////
////////////////////////////////////////////

test( "Use getRole() to return \"Engineer\" as role.", () => {
   const testRole = "Engineer";
   const engineer = new Engineer( "Shellie", 38472, "Shellie@Shellie.Com" );

   expect( engineer.getRole()).toBe( testRole );
});