const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs/promises");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { write } = require("fs");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
let team = [];


questionPrompt()
async function questionPrompt(){
const data = await inquirer 
.prompt([
    {
        name: 'employee_type',
        type: 'list',
        message: "What type of employee would you like to create a profile for?",
        choices: ['Manager', 'Engineer', 'Intern'],
    },
]);

if (data.employee_type == 'Manager'){
    const managerData = await inquirer
    .prompt([
        {
            name: 'name',
            message: "What is the employee's full name?",
            type: 'input',
        },
        {
            name: 'id',
            type: 'input',
            message: "What is the employee's ID number?",
        },
        {
            name: 'email',
            type: 'input',
            message: "What is the employee's email address?",
        },
        {
            name: 'office_number',
            message: "What is the manager's office number?",
            type: 'input',
        },
    ]
    )
    console.log(managerData.office_number)

} else if (data.employee_type == 'Engineer') {
    const engineerData = await inquirer
    .prompt([
        {
            name: 'name',
            message: "What is the employee's full name?",
            type: 'input',
        },
        {
            name: 'id',
            type: 'input',
            message: "What is the employee's ID number?",
        },
        {
            name: 'email',
            type: 'input',
            message: "What is the employee's email address?",
        },
        {
            name: 'github',
            message: "What is the employees's GitHub username?",
            type: 'input',
        },
    ]
    )
    //team.push(new Engineer(`${engineerData.name}, ${engineerData.id}, ${engineerData.email}, ${engineerData.github}`));
    console.log(engineerData.github)
} else{
    const internData = await inquirer
    .prompt([
        {
            name: 'name',
            message: "What is the employee's full name?",
            type: 'input',
        },
        {
            name: 'id',
            type: 'input',
            message: "What is the employee's ID number?",
        },
        {
            name: 'email',
            type: 'input',
            message: "What is the employee's email address?",
        },
        {
            name: 'school',
            message: "What is the intern's school name?",
            type: 'input',
        },
    ]
    )
    console.log(internData.school)
}
}






startProgram()
async function startProgram(){
    team.push(new Engineer("Angelina", 14, "email", "github"));
    let htmlDoc = render(team)
    await fs.writeFile(outputPath, htmlDoc)
}
console.log(team)