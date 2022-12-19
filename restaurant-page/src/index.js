import "./style.css";
import Header from "./Header/Header";
import Home from "./Home/Home";

//kinda the entry point for the app but Header attaches stuff to contentContainer
document.body.appendChild(Header());

//create content div that header will attach stuff to
const contentContainer = document.createElement("div");
contentContainer.id = "content";
document.body.appendChild(contentContainer);

//do this at the start of the site so we are actually looking at something
const home = Home();
contentContainer.appendChild(Home());
