import { renderHeader } from "./header";
import { firstrenderTopPage } from "./top_page";
import { renderMenuPage } from "./menu_page";
import { renderAboutPage } from "./about_page";

renderHeader();





// // content container
// const contentContainer = document.getElementById("content");

// // header
// const header = document.createElement("div");
// header.id = "header";

// const title = document.createElement("h1");
// title.textContent = "Forest Coffee";
// header.appendChild(title);

// const menuBar = document.createElement("div");
// menuBar.id = "menu-bar";
// const topButton = document.createElement("button");
// topButton.textContent = "Top";
// const menuButton = document.createElement("button");
// menuButton.textContent = "Menu";
// const aboutButton = document.createElement("button");
// aboutButton.textContent = "about";
// menuBar.appendChild(topButton);
// menuBar.appendChild(menuButton);
// menuBar.appendChild(aboutButton);

// // main container
// const main = document.createElement("div");
// main.id = "main";

// // top page
// const blurb = document.createElement("div");
// blurb.id = "blurb";
// const blurbHeader = document.createElement("h2");
// blurbHeader.textContent = "Coffee From the Trees"
// blurb.appendChild("blurbHeader");
// const blurbParagraph = document.createElement("p");
// blurbParagraph.innerHTML = "Freshly roasted, freshly brewed. <br> Visit us in person or order online!";
// blurb.appendChild(blurbParagraph);

// //menu page - just a learning project, so gonna get real lazy here...
// main.innerHTML = '\n            <div id="menu">\n            <div class="menu-item">\n                <img id="long-black" src="../src/longblack.png" alt="Picture of a cup of coffee">\n                <div class="description">Long Black 400円</div>\n            </div>\n            <div class="menu-item">\n                <img id="latte" src="../src/latte.png" alt="Picture of a foamy latte">\n                <div class="description">Oats Milk Latte 500円 </div>\n            </div>\n            </div>\n        ';
// const longBlackPicture = document.getElementById("long-black");
// longBlackPicture.src = "longblack.png";
// const latte = document.getElementbyID("latte");
// latte.src = "latte.png";

// //about page - gonna be lazy too
// main.innerHTML = `\n            <div id="about">\n            <div id="location">\n                <h2>\n                    Trek out to our physical location:\n                </h2><h2>\n                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d381.48322381446303!2d138.13336505695443!3d36.93272444760099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sjp!4v1670316561830!5m2!1sen!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>\n            </h2></div>\n            <div id="contact">\n                <h2>Or contact us</h2>\n                <div>Email: <a href="https://github.com/Roibeirt">https://github.com/Roibeirt</a> <br> Phone: <a href="https://github.com/Roibeirt">https://github.com/Roibeirt</a> </div>\n            </div>\n            <div id="about-us">\n                <h2>About Us</h2>\n                <p>This is just a silly little project to practice webkit. <br> While Myoko is a beautiful area to go hiking, don't expect a coffee when you get there.</p>\n            </div>\n        </div>\n        `


