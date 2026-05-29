import firstImage from './images/picture_1.png';
import secondImage from './images/picture_2.png';
import thirdImage from './images/picture_3.png';

class ImageContainer {
    constructor(name, imageUrl, authorName, authorUrl) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.authorName = authorName;
        this.authorUrl = authorUrl;
    }

    createContainer() {
        const gridElement = document.createElement('div');

        gridElement.style.backgroundImage = `url(${this.imageUrl})`;
        gridElement.style.backgroundPosition = 'center';
        gridElement.style.backgroundSize = 'cover';

        const authorCredit = document.createElement('a');
        authorCredit.href = this.authorUrl;
        authorCredit.target = '_blank';

        authorCredit.innerHTML = `Photo : <span>${this.authorName}</span>`;
        authorCredit.classList.add('author-credit');

        gridElement.append(authorCredit);
        return gridElement;
    }
}

export function createHomePage() {
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('image-grid');

    const elementsData = [
        { name: 'first-image', imageUrl: firstImage, authorName: 'Gaelle Marcel', authorUrl: 'https://unsplash.com/@gaellemarcel'},
        { name: 'second-image', imageUrl: secondImage, authorName: 'Karsten Winegeart', authorUrl: 'https://unsplash.com/@_karsten'},
        { name: 'third-image', imageUrl: thirdImage, authorName: 'Volodymyr Tokar', authorUrl: 'https://unsplash.com/@astrovol'},
    ];

    elementsData.forEach((element, index) => {
        const elementObject = new ImageContainer(element.name, element.imageUrl, element.authorName, element.authorUrl);
        const elementContainer = elementObject.createContainer();

        elementContainer.classList.add(`card-${index+1}`);

        gridContainer.appendChild(elementContainer);
    });

    return gridContainer;
}