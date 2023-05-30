//change all element removers to change display to none instead 
//so every webpage is always loaded on startup
//instead of deleting and generating each page everytime you switch to a new page
import { createHeader, createHomeContent, createFooter, homeContent } from './home.js';
import { createMenuContent, menuContainer, menuContent } from './menu.js';
import { createContactContent, contactContent } from './contact.js';
import './styles.css';

//function that hides the content for the 2 pages that are not currently selected
function hideContent(page) {
    page.style.display = "none";
}

createHeader();
createHomeContent();
createMenuContent();
hideContent(menuContent);
createContactContent();
hideContent(contactContent);
createFooter();
content.classList.add('homePage');

//3 event listeners that change the currently viewed page depending on what navigation tab is selected
document.getElementById('home').addEventListener('click', function(){
    if (content.getAttribute('class') == 'homePage') {
        // do nothing
    } else {
        hideContent(menuContent);
        hideContent(contactContent);
        homeContent.style.display = 'flex';
        content.classList.remove('menuPage');
        content.classList.remove('contactPage');
        content.classList.add('homePage'); 
    }
});

document.getElementById('menu').addEventListener('click', function(){
    if (content.getAttribute('class') == 'menuPage') {
        // do nothing
    } else {
        hideContent(homeContent);
        hideContent(contactContent);
        menuContent.style.display = 'flex';
        content.classList.remove('homePage');
        content.classList.remove('contactPage');
        content.classList.add('menuPage');
    }
});

document.getElementById('contact').addEventListener('click', function(){
    if (content.getAttribute('class') == 'contactPage') {
        // do nothing
    } else {
        hideContent(homeContent);
        hideContent(menuContent);
        contactContent.style.display = 'flex';
        content.classList.remove('homePage');
        content.classList.remove('menuPage');
        content.classList.add('contactPage');
    }
});

