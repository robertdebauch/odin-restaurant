export function createAboutPage() {
    const aboutWrapper = document.createElement('div');
    aboutWrapper.classList.add('about-wrapper');

    /* first div : about text */

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    const aboutText = document.createElement('div');
    aboutText.classList.add('about-text')
    aboutText.textContent = "Mr Leopold Bloom ate with relish the inner organs of beasts and fowls. He liked thick giblet soup, nutty gizzards, a stuffed roast heart, liverslices fried with crustcrumbs...";

    const headlineText = document.createElement('h2');
    headlineText.classList.add('headline-text');
    headlineText.textContent = "Have a similar experience... at the Last Supper Cafe";

    textContainer.append(aboutText, headlineText);

    /* second div : disclaimer */

    const disclaimerContainer = document.createElement('div');
    disclaimerContainer.classList.add('disclaimer-container');

    const disclaimerText = document.createElement('p');
    disclaimerText.classList.add('disclaimer-text');


    const disclaimerAccent = document.createElement('span');
    disclaimerAccent.classList.add('food');
    disclaimerAccent.textContent = "Food ";

    const disclaimerLink = document.createElement('a');
    disclaimerLink.href = "https://www.discogs.com/release/419623-Food-Last-Supper?srsltid=AfmBOop7snTkjbkYXhkioQ5xLEGRuq0_0O5AlTm1S0KDCt6LcsV6EXzm";
    disclaimerLink.target = "_blank";
    disclaimerLink.rel = "noopener noreferrer";
    disclaimerLink.textContent = "The Last Supper";

    disclaimerText.append("The cafe is fictitious, all coincidences are coincidental, source of inspiration: the album of the group ", disclaimerAccent, "called ", disclaimerLink, ".");

    disclaimerContainer.append(disclaimerText);

    aboutWrapper.append(textContainer, disclaimerContainer);

    return aboutWrapper;
}

