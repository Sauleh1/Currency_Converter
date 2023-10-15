#!/usr/bin/env node

// import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";

// Dinar: 993.84
// Dollar: 306.25
// Euro: 330.07
// Riyal: 81.65

// These Values are from when i Did this project back in August
// --> Conclusion:
// --> These values are most definitly outdated. Sorry.

const AmountToConvert = await inquirer.prompt([
    {
        message: gradient.retro("How to convert?"),
        type: "list",
        choices: [`Rs. to Foreign Cash`,`Foreign Cash to Rs.`],
        name: "Converting"
    }
])

const { Converting } = AmountToConvert

if (Converting) {
    if(Converting === "Rs. to Foreign Cash") {
        const what_to = await inquirer.prompt([
            {
                message: gradient.retro("Which Type of Foreign Cash?"),
                type: "list",
                choices: [`Dollar`,`Dinar`,`Riyal`,`Euro`],
                name: "WhatForeign"
            },
            {
                message: gradient.retro("How much Rs.?"),
                type: "number",
                name: "Amount"
            }
        ])
        const { WhatForeign , Amount } = what_to
        if (WhatForeign && Amount) {
            if (what_to.WhatForeign === "Dollar") {
                console.log(gradient.summer(`${Amount} Rs. to Dollar is approximatly `) + Math.round(Amount / 303.18) +` dollar.`);
            }
            else if (what_to.WhatForeign === "Dinar") {
                console.log(gradient.summer(`${Amount} Rs. to Dinar is approximatly `) + Math.round(Amount / 971.11) +` dinar.`);
            }
            else if (what_to.WhatForeign === "Riyal") {
                console.log(gradient.summer(`${Amount} Rs. to Riyal is approximatly `) + Math.round(Amount / 80.81) +` riyal.`);
            }
            else if (what_to.WhatForeign === "Euro") {
                console.log(gradient.summer(`${Amount} Rs. to Euro is approximatly `) + Math.round(Amount / 327.44) +` Euro.`);
            }
        }
    }
    else if (Converting === "Foreign Cash to Rs.") {
        const Howmuch = await inquirer.prompt([
            {
                message: gradient.retro("Which one?:"),
                type: "list",
                choices: [`Dollar`,`Dinar`,`Riyal`,`Euro`],
                name: "Towhat"
            },
            {
                message: gradient.retro("How much"),
                type: "number",
                name: "How_much"
            }
        ])        
        const { How_much } = Howmuch
        if (How_much && Howmuch.Towhat === "Dollar") {
            console.log(gradient.summer(`${How_much} Dollar to Rs. is ` )+ How_much * 303.18);
        }
        else if (How_much && Howmuch.Towhat === "Dinar") {
            console.log(gradient.summer(`${How_much} Dinar to Rs. is `) + How_much * 982.38);
        }
        else if (How_much && Howmuch.Towhat === "Riyal") {
            console.log(gradient.summer(`${How_much} Riyal to Rs. is `) + How_much * 80.81);
        }
        else if (How_much && Howmuch.Towhat === "Euro") {
            console.log(gradient.summer(`${How_much} Euro to Rs. is `) + How_much * 327.44);
        }
    }        
}

