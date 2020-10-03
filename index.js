// install Inquirer
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// require all the depencies I'll need - inquirer, fs
const writeFileAsync = util.promisify(fs.writeFile)

// create array of questions to prompt user
function readmePrompt() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter the project title.",
            name: "title"
        },
        {
            type: "input",
            message: "Describe the project",
            name: "description"
        },
        {
            type: "input",
            message: "What nodes to install?",
            name: "installs"
        },
        {
            type: "input",
            message: "What licenses were used",
            choices:
                ["MIT",
                    "IBM",
                    "Eclipse",
                    "Apache",
                    "GNU"],
            name: "licenses"
        },
        {
            type: "input",
            message: "any contributors?",
            name: "contributions"
        },
        {
            type: "input",
            message: "Preferred contact E-mail for questions",
            name: "contact"
        },
        {
            type: "input",
            message: "enter GitHub URL",
            name: "Github"
        },
        {
            type: "input",
            message: "Additional info about user contacting",
            name: "questions"
        }

    ]).then(function createMD(answer) {
        // ReadMe format template begins here
        const readMeTemplate =
            `# ${answer.title}
            
            ##Contents
            
            1.[Introduction] (#description)
               
            2.[Installation] (#install)
            
            3.[Licenses] (#license)
            
            4.[Contributions] (#contribution)
            
            5.[Contact] (#contact)
            
            6.[Github] (#github)
            
            7.[Additional Info] (#questions)
            
            
            <br>
             
            ## 1. Introduction {#description}
            ${answer.description}
            ## 2. Installation {#install}
            ${answer.installs}
            ## 3. Licenses {#license}
            ${answer.licenses}
            ## 4. Contributions {#contribution}
            ${answer.contributions}
            ## 5. Contact {#contact}
            ${answer.contact}
            ## 6. Github {#github}
            ${answer.Github}
            ## 7. Additional Info {#questions}
            ${answer.questions}`
        
            // variable for creation of new readme file
        const fileName = `${answers.title.replace(/\s/g, '').toLowerCase()}.md`;

        fs.writeFile(fileName, readmePrompt, function () {
            if (err) {
                return console.log(err)
            }
            console.log("All set!")
        })
                
        
    })


}


readmePrompt()



// write a readME in a markdown file for a template reference

// function that will generate readme template
// readmePrompt()
//     .then(function (answer) {
//         const readMeMd = createMD(answer);

//         return writeFileAsync("ReadMe.md", readMeMd);
//     })
//     .then(function () {
//         console.log("Successfully wrote to index.html");
//     })
//     .catch(function (err) {
//         console.log(err);
//     });


// user answers that inquirer returns and pass them to readME generator function



