import createContentPage from './about.js';
import createMenuPage from './menu.js';
import createRestaurantHomePage from './restaurant.js';
import createTabs from './header.js';
import createHeaderPage from './footer.js';
import './style.css';


function initialLoad() {
    createTabs();
    createRestaurantHomePage();
    createMenuPage();
    createContentPage();
    createHeaderPage();
}

export default initialLoad;