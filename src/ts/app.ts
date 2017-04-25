import { Person } from './Classes/index';
import { Song } from './Classes/index';

let person = new Person("Nick", "sample@email.com");
let song = new Song('Hey Jude', 'The Beatles');

person.sayName();

document.getElementById('sampleDiv').innerHTML = "My name is " + person.name + '. I like the song ' + song.title + ', by ' + song.artist;