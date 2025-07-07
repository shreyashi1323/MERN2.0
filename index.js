
import {Computer} from './computer.js'
class Computer{
    constructor(name){
        this.name = name
    }
    run(){
        console.log("the computer is now running")
    }
}
class Macbook extends Computer{
    constructor(name , company){
        super(name)
        this.company = company
    }

    login(){
        console.log("you are logged in to a mac"+ this.name)        
    }
}

const mac = new Macbook('Air' , 'Apple');
mac.login()
mac.run()