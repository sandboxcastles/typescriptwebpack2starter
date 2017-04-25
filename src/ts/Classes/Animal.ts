import { AnimalInterface } from '../Interfaces/index';
export class Animal implements AnimalInterface {
    name: string;
    species :string;
    constructor(name:string, species:string){
        this.name = name;
        this.species = species;
    }
    speak(){
        console.log(this.getWords());
    }
    getWords():string {
        return 'I am ' + this.name + ', and I am a ' + this.species;
    }
}