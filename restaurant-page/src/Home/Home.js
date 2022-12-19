import BeerTap from "./beer-tap.jpg";
import BeerMug from "./beer-mug.jpg";
import BeerCheers from "./beer-cheers.jpg";
import TextContainer from "../helper";

export default function Home() {
    //Image 1
    const image1 = new Image();
    image1.src = BeerTap;

    //Tiny bit about the restaurant with some buzzwords probably\
    const greeting = "Drunkin Donuts is a great place to bring your friends on a night out. Who doesn't love beer and who doesn't love donuts? Put them together and you get us."
    const textContainer1 = TextContainer(greeting);

    //Image 2
    const image2 = new Image();
    image2.src = BeerMug;

    //Hours
    const hours = "We are never open unfortunately, this is a fake restuarant!";
    const textContainer2 = TextContainer(hours);

    //maybe image 3
    const image3 = new Image();
    image3.src = BeerCheers;

    //location
    const location = "We are located in my mind because i made this restaurant up :)";
    const textContainer3 = TextContainer(location);

    //container for the component
    const homeContainer = document.createElement("div");
    homeContainer.id = "homeContainer";

    homeContainer.appendChild(image1);
    homeContainer.appendChild(textContainer1);
    homeContainer.appendChild(image2);
    homeContainer.appendChild(textContainer2);
    homeContainer.appendChild(image3);
    homeContainer.appendChild(textContainer3);

    //attributions
    const attribution = document.createElement("p");
    attribution.textContent = "favicon by Vitaly Gorbachev";
    homeContainer.appendChild(attribution);

 
    return homeContainer;
}