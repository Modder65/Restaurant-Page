/* Images */
import phone from './assets/images/phone.svg';
import home from './assets/images/home.svg';

export const contactContent = document.getElementById('contactContent');

export const contactContainer = document.createElement('div');
contactContainer.setAttribute("id", "contactContainer");


export function createContactContent() {
    const contactHeadingContainer = document.createElement('div');
    const contactHeading = document.createElement('h2');
    const contactInfo = document.createElement('div');
    contactHeadingContainer.setAttribute("id", "contactHeadingContainer");
    contactHeading.setAttribute("id", "contactHeading");
    contactInfo.setAttribute("id", "contactInfo");
    contactHeading.textContent = "Contact";
    contactContent.appendChild(contactHeadingContainer);
    contactHeadingContainer.appendChild(contactHeading);
    contactContent.appendChild(contactContainer);
    contactContainer.appendChild(contactInfo);
    for (let i = 0; i < 3; i++) {
        const contactItem = document.createElement('div');
        const contactText = document.createElement('p');
        contactItem.setAttribute("class", "contactItem");
        contactText.setAttribute("class", "contactText");
        if (i == 0) {
            const contactImg = document.createElement('img');
            contactImg.setAttribute("src", phone);
            contactText.textContent = "999-888-7777";
            contactInfo.appendChild(contactItem);
            contactItem.appendChild(contactImg);
            contactItem.appendChild(contactText);
            
        } else if (i == 1) {
            const contactImg = document.createElement('img');
            contactImg.setAttribute("src", home);
            contactText.textContent = "506 Fake Street, Fake FA";
            contactInfo.appendChild(contactItem);
            contactItem.appendChild(contactImg);
            contactItem.appendChild(contactText);
        } else if (i == 2) {
            contactText.textContent = "If you have inquiries about large parties please contact us at the above phone number.";
            contactInfo.appendChild(contactItem);
            contactItem.appendChild(contactText);
        }
    }
    
}


//div container
//phone number
//address
//p tag