const Employee = require( "../lib/Employee" );

test( "Create an employee object.", () => {
   const employee = new Employee( "Shellie", 2938, "Shellie@Shellie.Com");

   expect( typeof( employee )).toBe( "object" );
   expect( employee.name ).toEqual( expect.any( String ));
   expect( employee.id ).toEqual( expect.any( Number ));
   expect( employee.email ).toEqual( expect.any( String ));
});
