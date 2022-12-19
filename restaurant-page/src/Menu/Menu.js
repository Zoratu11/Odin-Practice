import TextContainer from "../helper";
import BeerDonut from "./beer-donut.png";

export default function Menu() {
    const menuContainer = document.createElement('div');
    
    //Image
    const image = new Image();
    image.src = BeerDonut;

    //menu
    const menuText = "Beer: $6.00                  Donuts: $1.75";
    const textContainer = TextContainer(menuText);

    //Append stuff here
    menuContainer.appendChild(image);
    menuContainer.appendChild(textContainer);
 
    //attributions
    const attribution = document.createElement("p");
    attribution.textContent = "favicon by Vitaly Gorbachev";
    menuContainer.appendChild(attribution);
 
    return menuContainer;
}