const firstRender = () => {
    const contentContainer = document.getElementById("content");
    // main container
    const main = document.createElement("div");
    main.id = "main";

    contentContainer.appendChild(main);
    renderTopPage();

}
const renderTopPage = () => {

    const main = document.getElementById("main");

    while (main.firstChild){
        main.removeChild(main.firstChild);
    }

    // top page
    const blurb = document.createElement("div");
    blurb.id = "blurb";
    const blurbHeader = document.createElement("h2");
    blurbHeader.textContent = "Coffee From the Trees"
    blurb.appendChild(blurbHeader);
    const blurbParagraph = document.createElement("p");
    blurbParagraph.innerHTML = "Freshly roasted, freshly brewed. <br> Visit us in person or order online!";
    blurb.appendChild(blurbParagraph);

    main.appendChild(blurb);
}

export {firstRender, renderTopPage};