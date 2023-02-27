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
    const thisManager = new Manager(managerData.name, managerData.id, managerData.email, managerData.office_number)
    team.push(thisManager)
    startProgram()
    async function startProgram(){
    let htmlDoc = render(team)
    await fs.writeFile(outputPath, htmlDoc)}
    console.log(team)

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

    const thisEngineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github)
    
    team.push(thisEngineer)
    startProgram()
    async function startProgram(){
    let htmlDoc = render(team)
    await fs.writeFile(outputPath, htmlDoc)
}   
    console.log(team)
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
    const thisIntern = new Manager(internData.name, internData.id, internData.email, internData.school)
    team.push(thisIntern)
    startProgram()
    async function startProgram(){
    let htmlDoc = render(team)
    await fs.writeFile(outputPath, htmlDoc)
} 
    console.log(internData.school)
}
}

// addEmployee()
// async function addEmployee (){
// const addAnother  = await inquirer
// .prompt([

//     {
//         name: 'add_member',
//         type: 'list',
//         message: "Would you like to add another team member?",
//         choices: ["Yes", "No"],
//     },

// ])

// if (addAnother.add_member == "Yes") {

//     questionPrompt()

// } else {

//     console.log("All done! Open the team.html file to view you team.")

// }

// }

