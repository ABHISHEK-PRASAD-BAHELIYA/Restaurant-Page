//restaurant.js

const createRestaurantHomePage = () => {
    const body = document.body;

    // Create header
    const header = document.createElement('header');
    const containerHeader = document.createElement('div');
    containerHeader.className = 'container';
    const logo = document.createElement('h1');
    logo.className = 'logo';
    logo.textContent = 'Restaurant Name';
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ['Home', 'Menu', 'About', 'Contact'].forEach(text => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${text.toLowerCase()}`;
        a.textContent = text;
        li.appendChild(a);
        ul.appendChild(li);
    });
    nav.appendChild(ul);
    containerHeader.appendChild(logo);
    containerHeader.appendChild(nav);
    header.appendChild(containerHeader);
    body.appendChild(header);

    
  // Create hero section
  const heroSection = document.createElement('section');
  heroSection.id = 'hero';
  const containerHero = document.createElement('div');
  containerHero.className = 'container';
  const h2Hero = document.createElement('h2');
  h2Hero.textContent = 'Welcome to Our Restaurant';
  const pHero = document.createElement('p');
  pHero.textContent = 'Enjoy the best dining experience with us!';
  const aHero = document.createElement('a');
  aHero.href = '#menu';
  aHero.className = 'btn';
  aHero.textContent = 'View Menu';
  containerHero.appendChild(h2Hero);
  containerHero.appendChild(pHero);
  containerHero.appendChild(aHero);
  heroSection.appendChild(containerHero);
  body.appendChild(heroSection);
}

export default createRestaurantHomePage;