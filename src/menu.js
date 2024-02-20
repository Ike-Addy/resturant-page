const createMenuPage = () => {    
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const heading = document.createElement('h1');
    heading.textContent = 'My Menu';

    const menuList = document.createElement('ul');
    const menuItem1 = document.createElement('li');
    menuItem1.textContent = 'Falafel on Gauva';
    const menuItem2 = document.createElement('li');
    menuItem2.textContent = 'Pho Ang Duong';
    const menuItem3 = document.createElement('li');
    menuItem3.textContent = 'Banku and Tilapia';
    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);

    pageContent.appendChild(heading);
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);
}

export default createMenuPage;