// Create menu section
const createMenuPage = () => {
    const body = document.body;
    
    const menuSection = document.createElement('section');
    menuSection.id = 'menu';
    const containerMenu = document.createElement('div');
    containerMenu.className = 'container';
    const h2Menu = document.createElement('h2');
    h2Menu.textContent = 'Our Menu';
    const menuGrid = document.createElement('div');
    menuGrid.className = 'menu-grid';
    const dishes = [
        { name: ' French toast', description: 'French toast is a dish of sliced bread soaked in beaten eggs and often milk or cream.', price: '$10.99', img: './assets/item1.jpeg' },
        { name: 'Borosil Oval Baking', description: 'The ovul baking dish perfect for baked dishes, lasagnas, raviolis, au gratins.', price: '$12.99', img: './assets/item2.jpeg' },
        { name: 'Breakfast Salad', description: 'Healthy and tasty salads which are perfect for breakfast.', price: '$12.99', img: './assets/item3.jpeg' },
        { name: 'Pizza', description: 'classic pizza with fresh tomatoes, mozzarella and tomato, and basil.', price: '$12.99', img: './assets/item4.jpeg' },
        { name: 'Pizza', description: 'classic pizza with fresh tomatoes, mozzarella and tomato, and basil.', price: '$25.99', img: './assets/hero-image.jpeg' },
        { name: 'Pizza', description: 'classic pizza with fresh tomatoes, mozzarella and tomato, and basil.', price: '$99.99', img: './assets/table.jpeg' },
    ];
    dishes.forEach(dish => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        const img = document.createElement('img');
        img.src = dish.img;
        img.alt = dish.name;
        const menuContent = document.createElement('div');
        menuContent.className = 'menu-content';
        const h3 = document.createElement('h3');
        h3.textContent = dish.name;
        const p = document.createElement('p');
        p.textContent = dish.description;
        const span = document.createElement('span');
        span.textContent = dish.price;
        menuContent.appendChild(h3);
        menuContent.appendChild(p);
        menuContent.appendChild(span);
        menuItem.appendChild(img);
        menuItem.appendChild(menuContent);
        menuGrid.appendChild(menuItem);
    });
    containerMenu.appendChild(h2Menu);
    containerMenu.appendChild(menuGrid);
    menuSection.appendChild(containerMenu);
    body.appendChild(menuSection);
};

export default createMenuPage;