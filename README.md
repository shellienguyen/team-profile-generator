# team-profile-generator

## Description:
The purpose of this application is to help development teams to quickly generate team roster in the HTML format that displays the team's basic information.
The application runs at the command prompt and when executed it will take the user through a series of command prompt questions to get user input.
There are three types of team members: manager, engineer, and intern.

For the team manager the prompts are asking the user to input for the manager's name, employee ID number, email address and the office number.

For team engineers the prompts are asking the user to input the engineer's name, employee ID number, email address, and the Github username.

For team interns, the prompts are asking the user to input the intern's name, employee ID number, email address, and the intern's school name.

The user will input information for one manager and as many engineers and interns as needed.

The application uses these input to generate a HTML file and will display the roster in the order the user inputs them.

## How to clone this Team Profile Generator:

1. In your browser, navigate to the (https://github.com/shellienguyen/team-profile-generator) GitHub repository.
2. Click the green button that says “Code” and copy the SSH key to your clipboard.
3) Navigate to your terminal and to the working directory where you want this repository to be housed at.
4. At the terminal command line, type “git clone ” and paste the SSH key you copied from the repository, hit Enter.
5. This application uses Node.js and due to large file size, Node.js will not be cloned to your repository.
You will need to install Node.js for this application to run.  Visit https://www.guru99.com/download-install-node-js.html
for instructions on installing Node.js.
6. Open the project in Visul Studio Code and open the "Integrated Terminal.  At the integrated command line inside Visual Studio
Code, type in "npm install" to install the node modules.
7. The Team Profile Generator also uses Inquirer dependencies, which need to be installed.  At the command line, type in “npm i inquirer” to
install the Inquirer dependencies.

## How to run this application

Team Profile Generator is a command-line application. At the command line, type in "node index" to run the application.  The user will be presented
with a series of questions related to the team members.  The user is to provide all needed information by answering the series of questions.  Once
the user has answered all questions, the HTML output file using the team name as the file name will be generated under the "dist" folder.

Inside VS Code, to view the generated html file, right-click the file and choose "Open in Default Browser" from the pop-up menu.

### Instuctional Video

For a demonstration on how to run this application, please watch this video: https://drive.google.com/file/d/1BurizloAeVAuiuBgUJfb4LOGwdm7pWUp/view

### Screenshots

Below are screenshots of the test output terminal, the user-input questions, and the HTML output for your reference:

![Mockup](https://github.com/shellienguyen/team-profile-generator/blob/main/src/images/test-output.jpg)
<br><br>
![Mockup](https://github.com/shellienguyen/team-profile-generator/blob/main/src/images/input-terminal1.jpg)
<br><br>
![Mockup](https://github.com/shellienguyen/team-profile-generator/blob/main/src/images/input-terminal2.jpg)
<br><br>
![Mockup](https://github.com/shellienguyen/team-profile-generator/blob/main/src/images/output-sample.jpg)
