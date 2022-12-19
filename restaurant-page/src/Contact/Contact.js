import TextContainer from "../helper";
import BeerFriends from "./beer-friends.jpg";

export default function About() {
    const contactContainer = document.createElement('div');

    //Image
    const image = new Image();
    image.src = BeerFriends;

    //Where people can contact us at
    const contactText = `Phone number: 123-456-7890,
                         Address: 700 SW Apple way Drive, Tacoma, WA,
                         Email: hotmale@hotmail.com,
                         Twitter: twitter.com/DrunkinDonuts`;
    const textContainer = TextContainer(contactText);

    //Append stuff here
    contactContainer.appendChild(image);
    contactContainer.appendChild(textContainer);

    //attributions
    const attribution = document.createElement("p");
    attribution.textContent = "favicon by Vitaly Gorbachev";
    contactContainer.appendChild(attribution);
 
    return contactContainer;
}