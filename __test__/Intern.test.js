const Intern = require( "../lib/Intern" );

test( "Set intern school.", () => {
   const testSchool = "UCLA Extension";
   const intern = new Intern( "Shellie", 38495, "Shellie@Shellie.Com", testSchool );

   expect( intern.school ).toBe( testSchool );
});

test( "Set school using getSchool().", () => {
   const testSchool = "UCLA Extension";
   const intern = new Intern( "Shellie", 38494, "Shellie@Shellie.Com", testSchool );

   expect( intern.getSchool()).toBe( testSchool );
});

test( "Use getRole() to return \"Intern\" as role.", () => {
   const testRole = "Intern";
   const intern = new Intern( "Shellie", 20803, "Shellie@Shellie.Com", "UCLA Extension" );

   expect( intern.getRole()).toBe( testRole );
});