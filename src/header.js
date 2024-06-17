    // Create header
const createTabs = () => {
    const body = document.body;

    const header = document.createElement('header');
    const containerHeader = document.createElement('div');
    containerHeader.className = 'container';
    const logo = document.createElement('h1');
    logo.className = 'logo';
    logo.textContent = 'Savory Bliss';
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
};

export default createTabs;