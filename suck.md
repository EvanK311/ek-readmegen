function readmePrompt() {
    inquirer.prompt([
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

    ]).then(function (answer) {
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
        const fileName = `${answer.title.replace(/\s/g, '').toLowerCase()}.md`;

        fs.writeFile(fileName, readmePrompt, function (err) {
            if (err) {
                return console.log(err)
            }
            console.log("All set!")
        })


    })


}