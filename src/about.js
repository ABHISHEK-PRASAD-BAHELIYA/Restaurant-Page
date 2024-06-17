// Create about section

const createContentPage = () => {
    const body = document.body;
    const aboutSection = document.createElement('section');
    aboutSection.id = 'about';
    const containerAbout = document.createElement('div');
    containerAbout.className = 'container';
    const h2About = document.createElement('h2');
    h2About.textContent = 'About Us';
    const pAbout = document.createElement('p');
    pAbout.textContent = 'Our restaurant offers a unique dining experience with a focus on high-quality ingredients and exceptional service. Join us for an unforgettable meal in a beautiful setting.';
    containerAbout.appendChild(h2About);
    containerAbout.appendChild(pAbout);
    aboutSection.appendChild(containerAbout);
    body.appendChild(aboutSection);
};

export default createContentPage;