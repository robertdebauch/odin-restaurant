import bludoOne from './images/bludo_1.png';
import bludoTwo from './images/bludo_2.png';
import bludoThree from './images/bludo_3.png';
import bludoFour from './images/bludo_4.png';

class MenuItem {
    constructor(name, imageUrl) {
        this.name = name;
        this.imageUrl = imageUrl;
    }

    createMenuItem() {
        const gridElement = document.createElement('div');
        gridElement.classList.add('bludo-grid-item');

        const bludoPicture = document.createElement('div');

        bludoPicture.style.backgroundImage = `url(${this.imageUrl})`;
        bludoPicture.style.backgroundPosition = 'center';
        bludoPicture.style.backgroundSize = 'fit';
        bludoPicture.classList.add('bludo-picture');

        const bludoName = document.createElement('p');
        bludoName.classList.add('bludo-name');
        bludoName.innerHTML = `${this.name}`;

        gridElement.append(bludoName, bludoPicture);
        return gridElement;
    }
}

export function createMenuPage() {
    const menuPageWrapper = document.createElement('div');
    menuPageWrapper.classList.add('menu-page-wrapper');

    const mainHeadline = document.createElement('div');
    mainHeadline.textContent = "Take your choice ↓";
    mainHeadline.classList.add('menu-headline');

    const bottomText = document.createElement('div');
    bottomText.textContent = "The sun shone, having no alternative, on the nothing new. But you have a choice.";
    bottomText.classList.add('menu-bottom-text');

    const gridContainer = document.createElement('div');
    gridContainer.classList.add('bludo-grid');

    const elementsData = [
        { name: "Turkish Delight", imageUrl: bludoOne, },
        { name: "Turkish Delight", imageUrl: bludoTwo, },
        { name: "Turkish Delight", imageUrl: bludoThree, },
        { name: "Turkish Delight", imageUrl: bludoFour, },
        { name: "Turkish Delight", imageUrl: bludoFour, },
        { name: "Turkish Delight", imageUrl: bludoThree, },
        { name: "Turkish Delight", imageUrl: bludoTwo, },
        { name: "Turkish Delight", imageUrl: bludoOne, },
    ];

    elementsData.forEach((element, index) => {
        const elementObject = new MenuItem(element.name, element.imageUrl);
        const elementContainer = elementObject.createMenuItem();

        elementContainer.classList.add(`bludo-${index + 1}`);

        gridContainer.appendChild(elementContainer);
    });

    gridContainer.appendChild(bottomText);

    menuPageWrapper.append(mainHeadline, gridContainer);

    return menuPageWrapper;
}