import { renderAboutPage } from "./about_page";
import { renderMenuPage } from "./menu_page";
import { firstRender, renderTopPage } from "./top_page";

const renderHeader = () => {
// content container
const contentContainer = document.getElementById("content");

// header
const header = document.createElement("div");
header.id = "header";

const title = document.createElement("h1");
title.textContent = "Forest Coffee";
header.appendChild(title);

const menuBar = document.createElement("div");
menuBar.id = "menu-bar";
const topButton = document.createElement("button");
topButton.textContent = "Top";
const menuButton = document.createElement("button");
menuButton.textContent = "Menu";
const aboutButton = document.createElement("button");
aboutButton.textContent = "About";
menuBar.appendChild(topButton);
menuBar.appendChild(menuButton);
menuBar.appendChild(aboutButton);

topButton.addEventListener("click", () => renderTopPage());
menuButton.addEventListener("click", () => renderMenuPage());
aboutButton.addEventListener("click", () => renderAboutPage());

header.appendChild(menuBar);

contentContainer.appendChild(header);

firstRender();

}

export{renderHeader};