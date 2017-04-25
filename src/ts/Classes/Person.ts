import {PersonInterface} from '../Interfaces/index';
export class Person implements PersonInterface {
    name:string;
    email:string;
    constructor(name:string, email:string){
        this.name = name;
        this.email = email;
    }
    sayName(){
        console.log('My name is ' + this.name);
    }
}