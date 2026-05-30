import "./reset.css";
import "./style.css";

import { createHomePage } from "./home.js";
import { createAboutPage } from "./about.js";
import { createMenuPage } from "./menu.js";

// import { about } from "./about.js";
// import { menupage } from "./menu.js";
// import { contact } from "./contact.js";

// function callPages() {
//     console.log(homepage);
//     console.log(about);
//     console.log(menupage);
//     console.log(contact);
// }

// callPages();

const dynamicRenderer = document.querySelector('#content');

function wipeOutContent() {
    dynamicRenderer.innerHTML = '';
}

wipeOutContent();

// const homepageGrid = createHomePage();
// dynamicRenderer.appendChild(homepageGrid);

// const aboutPage = createAboutPage();
// dynamicRenderer.appendChild(aboutPage);

const menuPage = createMenuPage();
dynamicRenderer.appendChild(menuPage);