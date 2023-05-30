/* Images */
import home from './assets/images/home.svg';
import menu from './assets/images/menu.svg';
import contact from './assets/images/contact.svg';
import pizza from './assets/images/pizza.jpg';
import github from './assets/images/github.svg';

const header = document.querySelector('header');
const footer = document.querySelector('footer');
export const homeContent = document.getElementById('homeContent');

function navigationSelector(event) {
    document.querySelectorAll('.div-button').forEach(function (index) {
        index.classList.remove("button-focus");
    });
    event.target.classList.add("button-focus");
}

export function createHeader() {
    const heading = document.createElement('h1');
    const navigation = document.createElement('nav');
    heading.textContent = 'Wood Fired Pizza';
    header.appendChild(heading);
    header.appendChild(navigation);
    for (let i = 0; i < 3; i++) {
        let button = document.createElement('div');
        let buttonImg = document.createElement('img');
        let buttonText = document.createElement('p');
        button.setAttribute("class", "div-button");
        button.setAttribute("tabindex", (i));
        if (i == 0) {
            buttonImg.setAttribute('src', home);
            buttonText.textContent = 'Home';
            button.setAttribute("id", "home");
            button.classList.add("button-focus");
            navigation.appendChild(button);
            button.appendChild(buttonImg);
            button.appendChild(buttonText);
        } else if (i == 1) {
            buttonImg.setAttribute('src', menu);
            buttonText.textContent = 'Menu';
            button.setAttribute("id", "menu");
            navigation.appendChild(button);
            button.appendChild(buttonImg);
            button.appendChild(buttonText);
        } else {
            buttonImg.setAttribute('src', contact);
            buttonText.textContent = 'Contact';
            button.setAttribute("id", "contact");
            navigation.appendChild(button);
            button.appendChild(buttonImg);
            button.appendChild(buttonText);
        }
        button.addEventListener('click', function(event) {
            navigationSelector(event);
        });
    }
}

export function createHomeContent() {
    const imgContainer = document.createElement('div');
    const homeImg = document.createElement('img');
    const infoContainer = document.createElement('div');
    const info = document.createElement('p');
    imgContainer.setAttribute("class", "img-container");
    homeImg.setAttribute("src", pizza);
    infoContainer.setAttribute("id", "infoContainer");
    info.textContent = "Welcome to our wood-fired pizzeria, where we blend authentic Italian flavors with modern sophistication. Our commitment to quality is unwavering as we source only the most exquisite ingredients from local farms and artisanal producers. Whether you choose a classic Margherita or one of our seasonal specials, you'll experience the perfect balance of premium toppings, flavorful sauces, and charred crust all at an affordable price.";
    homeContent.appendChild(imgContainer);
    imgContainer.appendChild(homeImg);
    homeContent.appendChild(infoContainer);
    infoContainer.appendChild(info);
}

export function createFooter() {
    const footerContent = document.createElement('div');
    const footerText = document.createElement('p');
    const footerImg = document.createElement('img');
    const githubLink = document.createElement('a');
    footerText.textContent = "2023 Alex Green";
    footerImg.setAttribute('src', github);
    githubLink.setAttribute('href', 'https://github.com/Modder65');
    githubLink.setAttribute('target', '_blank');
    footer.appendChild(footerContent);
    footerContent.appendChild(footerText);
    footerContent.appendChild(githubLink);
    githubLink.appendChild(footerImg);
}
