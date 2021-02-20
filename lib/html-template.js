// Generate the HTML texts for the HTML output file.
// Returns an array holding strings of HTML texts.
module.exports = {
   generateHtml( teamProfileArr ) {
      // Array to hold HTML text strings.
      const holdHtmlArr = [];

      const htmlHeaderAndTitleBar = `
<!DOCTYPE html>
<html lang = "en">
<head>
   <meta charset = "UTF-8">
   <meta name = "viewport" content = "width = device-width, initial scale = 1.0">
   <meta http-equiv = "X-UA-Compatible" content = "ie = edge">
   <title>${teamProfileArr[0]}</title>
   <link rel = "stylesheet" href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
   <link rel = "preconnect" href = "https://fonts.gstatic.com">
   <link href = "https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Spartan&display=swap" rel = "stylesheet">
   <link rel = "stylesheet" href = "../src/styles.css">
</head>

<body>
   <div class = "title-bar">
      <h1>${teamProfileArr[0]} Roster</h1>
   </div>

   <div class = "card-container">
   `;
      holdHtmlArr.push( htmlHeaderAndTitleBar );

      // Loop through the teamProfileArr array to display the profile for each team member
      for ( let i = 1; i < teamProfileArr.length; i++ ) {
         let teamMemberHtml = `
         <div class = "team-member-card">
            <div class = "team-member-card-top">
               <h2>${teamProfileArr[i].name}</h2>
               `;

               // Verify the team member's role to display the appropriate icon
               if ( teamProfileArr[ i ].role === "Manager" ) {
                  teamMemberHtml += `<h2 class="bi bi-cup">  ${teamProfileArr[i].role}</h2>`;
               }
               else if ( teamProfileArr[ i ].role === "Engineer" ) {
                  teamMemberHtml += `<h2 class="bi bi-lightbulb">  ${teamProfileArr[i].role}</h2>`;
               }
               else if ( teamProfileArr[ i ].role === "Intern" ) {
                  teamMemberHtml += `<h2 class="bi bi-eyeglasses">  ${teamProfileArr[i].role}</h2>`;
               };

               teamMemberHtml += `
            </div>
            <div class = "team-member-card-bottom">
               <p><b>Employee ID:</b> ${teamProfileArr[i].id}</p>
               <P><b>Email:</b><br><a href = "mailto:${teamProfileArr[i].email}">${teamProfileArr[i].email}</a></p>
         `;

         // If the team member is the manager, display the office number.
         if ( teamProfileArr[ i ].officeNumber ) {
            teamMemberHtml += `<p><b>Office Number:</b><br>${teamProfileArr[ i ].officeNumber}</p>`;
         }
         // If the team member is an engineer, display the Github username.
         else if (teamProfileArr[ i ].githubUsername ) {
            teamMemberHtml += `<p><b>GitHub:</b><br><a href = "https://github.com/${teamProfileArr[ i ].githubUsername}">${teamProfileArr[ i ].githubUsername}</a></p>`;
         }
         // If the team member is an intern, display the intern's school name.
         else if ( teamProfileArr[ i ].school ) {
            teamMemberHtml += `<p><b>School:</b><br>${teamProfileArr[ i ].school}</p>`;
         };

         teamMemberHtml += `
            </div>
         </div>
         `;
         holdHtmlArr.push( teamMemberHtml );
      };

      const htmlFooter = `
   </div>   
</body>
</html>
`;
      holdHtmlArr.push ( htmlFooter );

      // Return the HTML text strings in the array object.
      return holdHtmlArr;
   }
};
