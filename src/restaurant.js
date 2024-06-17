//restaurant.js

const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //create and append image element
    const img = document.createElement('img');
    img.src = '../dist/restaurant.jpg';
    img.height = '300';
    pageContent.appendChild(img);

    //create and append headline element
    const headline = document.createElement('h1');
    headline.textContent = "Welcome to our restaurant!";
    pageContent.appendChild(headline);

    //create and append copy element
    const copy = document.createElement('p');
    copy.textContent = "We serve the best food in town. Come and taste it!"
    pageContent.appendChild(copy);
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;