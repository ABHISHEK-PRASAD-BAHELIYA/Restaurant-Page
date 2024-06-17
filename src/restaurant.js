//restaurant.js

const createRestaurantHomePage = () => {
const body = document.body;
  
  // Create hero section
  const heroSection = document.createElement('section');
  heroSection.id = 'hero';
  const containerHero = document.createElement('div');
  containerHero.className = 'container';
  const h2Hero = document.createElement('h2');
  h2Hero.textContent = 'Welcome to Savory Bliss';
  const pHero = document.createElement('p');
  pHero.textContent = 'Experience the finest culinary delights and impeccable service.';
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