// initialize.js

import loadUI from "./UI";

function createHeader() {
    const header = document.createElement('header');
    const divHeader = document.createElement('div');
    const headerLogo = document.createElement('a');

    headerLogo.href = ".";
    headerLogo.innerText = "Todo List";
    headerLogo.id = "logo";
    
    header.appendChild(divHeader);
    divHeader.appendChild(headerLogo);

    return header;
}

function createFooter() {
    const footer = document.createElement('footer');
    const divFooter = document.createElement('div');
    const footerLink = document.createElement('a');

    footerLink.href = "https://github.com/rudnam/odin-todo-list";
    footerLink.innerText = "Github repo";
    
    footer.appendChild(divFooter);
    divFooter.appendChild(footerLink);

    return footer;
}

export default function initialize() {
    const content = document.createElement('div');

    content.id = 'content';

    document.body.appendChild(createHeader());
    document.body.appendChild(content);
    document.body.appendChild(createFooter());

    loadUI();

    return;
}