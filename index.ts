import chalk from "chalk"
import inquirer from "inquirer"

// Classes Player & Opponent

class Player{
    name:string
    fuel:number = 100
    constructor(name:string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }
}
class Opponent{
    name:string
    fuel:number = 100
    constructor(name:string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    
}

// Player Name & Opponent Select

let player = await inquirer.prompt({
    type:"input",
    name:"name",
    message:"Please enter your name:"
})

let opponent = await inquirer.prompt({
    type:"list",
    name:"select",
    message:"Select your opponent",
    choices:["Skeleton","Assasin","Zombie"]
});

// Gather Data

let p1 = new Player(player.name);
let o1 = new Player(opponent.select);

do{
    // Skeleton
    if (opponent.select == "Skeleton"){
        
        let ask = await inquirer.prompt({
            type:"list",
            name:"opt",
            message:"Please enter your name:",
            choices:["Attack","Drink Portion","Run for your life"]
        });
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
                if(p1.fuel<=0){
                    console.log(chalk.red.bold.italic("You loose, better luck next time"))
                    process.exit()
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
                if(o1.fuel<=0){
                    console.log(chalk.green.bold.italic("You Win, Congratulations"))
                    process.exit()
                }
            }
        }
        if(ask.opt == "Drink Portion"){
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`You drink Health portion your fuel is ${p1.fuel}`))
            
        }
        if(ask.opt == "Run for your life"){
            console.log(chalk.red.bold.italic("You loose, better luck next time"))
            process.exit()
        }
    }
    
    // Assasin
    if (opponent.select == "Assasin"){
        
        let ask = await inquirer.prompt({
            type:"list",
            name:"opt",
            message:"Please enter your name:",
            choices:["Attack","Drink Portion","Run for your life"]
        });
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
                if(p1.fuel<=0){
                    console.log(chalk.red.bold.italic("You loose, better luck next time"))
                    process.exit()
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
                if(o1.fuel<=0){
                    console.log(chalk.green.bold.italic("You Win, Congratulations"))
                    process.exit()
                }
            }
        }
        if(ask.opt == "Drink Portion"){
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`You drink Health portion your fuel is ${p1.fuel}`))
            
        }
        if(ask.opt == "Run for your life"){
            console.log(chalk.red.bold.italic("You loose, better luck next time"))
            process.exit()
        }
    }

    // Zombie
    if (opponent.select == "Zombie"){
        
        let ask = await inquirer.prompt({
            type:"list",
            name:"opt",
            message:"Please enter your name:",
            choices:["Attack","Drink Portion","Run for your life"]
        });
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
                if(p1.fuel<=0){
                    console.log(chalk.red.bold.italic("You loose, better luck next time"))
                    process.exit()
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
                if(o1.fuel<=0){
                    console.log(chalk.green.bold.italic("You Win, Congratulations"))
                    process.exit()
                }
            }
        }
        if(ask.opt == "Drink Portion"){
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`You drink Health portion your fuel is ${p1.fuel}`))
            
        }
        if(ask.opt == "Run for your life"){
            console.log(chalk.red.bold.italic("You loose, better luck next time"))
            process.exit()
        }
    }
    
}
while(true)

