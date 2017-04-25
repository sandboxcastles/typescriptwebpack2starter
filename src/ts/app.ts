import { Person } from './Classes/index';
import { Song } from './Classes/index';

let person = new Person("Nick", "sample@email.com");
let song = new Song('Hey Jude', 'The Beatles');
let initialText = "My name is " + person.name + '. I like the song ' + song.title + ', by ' + song.artist;
person.sayName();
let sampleDiv = document.getElementById('sampleDiv');
sampleDiv.innerHTML = initialText;
let theButton = document.getElementById('theButton');
theButton.onclick = () => {
    let textBox = (<HTMLInputElement>document.getElementById("theWord"));
    if (theButton.textContent === "Change It") {
        theButton.textContent = "Change back!!!";
        textBox.style.display = "none";
        sampleDiv.innerHTML = textBox.value;
    }
    else {
        theButton.textContent = "Change It";
        sampleDiv.innerHTML = initialText;
        textBox.style.display = "inline-block";
    }
    textBox.value = '';
};