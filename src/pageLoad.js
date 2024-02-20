import createRestaurantHomePage from './restaurant'
import loadTabs from './tabs';

function initalLoad() {
    loadTabs();
    createRestaurantHomePage();
}

export default initalLoad;