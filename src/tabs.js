import createContactPage from "./contact";
import createMenuPage from "./menu";
import createResturantHomePage from "./restaurant";

const loadTabs = () => {
    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');
    const contactBtn = document.getElementById('contact');

    homeBtn.classList.add('tab');
    menuBtn.classList.add('tab');
    contactBtn.classList.add('tab');

    homeBtn.addEventListener('click', () => {
        clearContent();
        createResturantHomePage();
    });

    menuBtn.addEventListener('click', () => {
        clearContent();
        createMenuPage();
    });

    contactBtn.addEventListener('click', () => {
        clearContent();
        createContactPage();
    });
}

function clearContent () {
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');

    if (pageContent) {
        content.removeChild(pageContent);
    }
}

export default loadTabs;