import "./reset.css";
import "./style.css";

import { homepage } from "./home.js";
import { about } from "./about.js";
import { menupage } from "./menu.js";
import { contact } from "./contact.js";

function callPages() {
    console.log(homepage);
    console.log(about);
    console.log(menupage);
    console.log(contact);
}

callPages();