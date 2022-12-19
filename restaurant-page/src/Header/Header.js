import Home from "../Home/Home";
import Menu from "../Menu/Menu";
import Contact from "../Contact/Contact";

export default function Header() {
    //top level element for header (a container)
    const container = document.createElement("div");
    container.classList.add("navbarContainer");

    const heading = document.createElement("h2");
    heading.textContent = "Drunkin Donuts";
    heading.classList.add("heading");
    
    //home
    const homeButton = document.createElement("div");
    homeButton.classList.add("button");
    homeButton.textContent = "Home";

    homeButton.addEventListener("click", () => {
        const contentContainer = document.getElementById("content");
        contentContainer.innerHTML = "";
        contentContainer.appendChild(Home());
    });

    //menu
    const menuButton = document.createElement("div");
    menuButton.classList.add("button");
    menuButton.textContent = "Menu";

    menuButton.addEventListener("click", () => {
        const contentContainer = document.getElementById("content");
        contentContainer.innerHTML = "";
        contentContainer.appendChild(Menu());
    });

    //contact
    const contactButton = document.createElement("div");
    contactButton.classList.add("button");
    contactButton.textContent = "Contact";

    contactButton.addEventListener("click", () => {
        const contentContainer = document.getElementById("content");
        contentContainer.innerHTML = "";
        contentContainer.appendChild(Contact());
    });

    //append to container
    container.appendChild(heading);
    container.appendChild(homeButton);
    container.appendChild(menuButton);
    container.appendChild(contactButton);

    return container;

}