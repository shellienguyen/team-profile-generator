const Manager = require( "../lib/Manager" );
const Employee = require( "../lib/Employee" );

test( "Setting manager's office number.", () => {
   const testOfficeNumber = 888;
   const employee = new Manager( "Shellie", 38472, "Shellie@Shellie.Com", testOfficeNumber );

   expect( employee.officeNumber ).toBe( testOfficeNumber );
});

test( "Use getRole() to return \"Manager\" as role.", () => {
   const testRole = "Manager";
   const employee = new Manager( "Shellie", 38472, "Shellie@Shellie.Com", 888 );

   expect( employee.getRole( testRole )).toBe( testRole );
});