const Employee = require( "../lib/Employee" );

////////////////////////////////////////////
////////////////////////////////////////////

test( "Create an employee object.", () => {
   const employee = new Employee( "Shellie", 2938, "Shellie@Shellie.Com");

   expect( typeof( employee )).toBe( "object" );
   expect( employee.name ).toEqual( expect.any( String ));
   expect( employee.id ).toEqual( expect.any( Number ));
   expect( employee.email ).toEqual( expect.any( String ));
});

////////////////////////////////////////////
////////////////////////////////////////////

test( "Check to see if can getName() or not.", () => {
   const testName = "Shellie";
   const employee = new Employee( testName );

   expect( employee.getName()).toBe( testName );
});

////////////////////////////////////////////
////////////////////////////////////////////

test( "Check to see if can getId() or not.", () => {
   const testId = 93847;
   const employee = new Employee( "Shellie", testId );

   expect( employee.getId()).toBe( testId );
});

////////////////////////////////////////////
////////////////////////////////////////////

test( "Check to see if can getEmail() or not.", () => {
   const testEmail = "Shellie@Shellie.Com";
   const employee = new Employee( "Shellie", 29384, testEmail );

   expect( employee.getEmail()).toBe( testEmail );
});

////////////////////////////////////////////
////////////////////////////////////////////

test( "Use getRole() to return \"Employee\" as role.", () => {
   const testRole = "Employee";
   const employee = new Employee( "Shellie", 38479, "Shellie@Shellie.Com" );

   expect( employee.getRole()).toBe( testRole );
});