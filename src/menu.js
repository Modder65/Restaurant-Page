/* Images */
import pizza1 from './assets/images/pizza1.png';
import pizza2 from './assets/images/pizza2.png';
import pizza3 from './assets/images/pizza3.png';
import pizza4 from './assets/images/pizza4.png';
import pizza5 from './assets/images/pizza5.png';
import pizza6 from './assets/images/pizza6.png';
import pizza7 from './assets/images/pizza7.png';
import pizza8 from './assets/images/pizza8.png';

export const menuContent = document.getElementById('menuContent');

export const menuContainer = document.createElement('div');
menuContainer.setAttribute("id", "menuContainer");

export function createMenuContent() {
    const menuHeadingContainer = document.createElement('div');
    const menuHeading = document.createElement('h2');
    menuHeadingContainer.setAttribute("id", "menuHeadingContainer");
    menuHeading.setAttribute("id", "menuHeading");
    menuHeading.textContent = "Pizza";
    menuContent.appendChild(menuHeadingContainer);
    menuHeadingContainer.appendChild(menuHeading);
    createMenuItems();
}

const imageUrls = [
    pizza1,
    pizza2,
    pizza3,
    pizza4,
    pizza5,
    pizza6,
    pizza7,
    pizza8
];

const textContents = [
    "Tomato sauce, Mozarella, Tomato, Sausage, Garlic, Basil",
    "Tomato sauce, Mozarella, Feta cheese, Shrimp, Olives, Basil",
    "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil",
    "Tomato sauce, Bacon, Pineapple, Olives, Basil",
    "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil",
    "Tomato sauce, Mozarella, Feta cheese, Tomato, Onion, Chilli",
    "White sauce, Mozarella, Salmon, Pineapple, Olives, Basil",
    "Tomato sauce, Mozarella, Sausage, Bacon, Garlic, Pepper, Chilli"
];

const headerTextContents = [
    "Salsiccia",
    "Gamberi",
    "Pepe",
    "Tomato",
    "Colorato",
    "Pomodoro",
    "Crema",
    "Carne"
];


function createMenuItems() {
    for (let i = 0; i < 4; i++) {
        const itemContainer = document.createElement('div');
        itemContainer.setAttribute('class', 'itemContainer');
        for (let j = 0; j < 2; j++) {
            const menuItem = document.createElement('div');
            menuItem.setAttribute('class', 'menuItem');
            const itemHeading = document.createElement('h3');
            itemHeading.textContent = headerTextContents[i * 2 + j];
            const menuImg = document.createElement('img');           
            menuImg.setAttribute('src', imageUrls[i * 2 + j]);       
            const menuText = document.createElement('p');            
            menuText.textContent = textContents[i * 2 + j];          
            menuItem.appendChild(itemHeading);
            menuItem.appendChild(menuImg);
            menuItem.appendChild(menuText);
            itemContainer.appendChild(menuItem);
        }
        menuContainer.appendChild(itemContainer);
    }
    menuContent.appendChild(menuContainer);
}
