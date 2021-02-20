const Manager = require( "../lib/Manager" );
const Employee = require( "../lib/Employee" );

////////////////////////////////////////////
////////////////////////////////////////////

test( "Setting manager's office number.", () => {
   const testOfficeNumber = 888;
   const manager = new Manager( "Shellie", 38472, "Shellie@Shellie.Com", testOfficeNumber );

   expect( manager.officeNumber ).toBe( testOfficeNumber );
});

////////////////////////////////////////////
////////////////////////////////////////////

test( "Use getRole() to return \"Manager\" as role.", () => {
   const testRole = "Manager";
   const manager = new Manager( "Shellie", 38472, "Shellie@Shellie.Com", 888 );

   expect( manager.getRole()).toBe( testRole );
});