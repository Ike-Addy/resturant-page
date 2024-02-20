

//restaurant.js

const createResturantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // Create and append image element 
    const image = document.createElement('img');
    image.src = 'https://static.vecteezy.com/system/resources/previews/029/320/139/non_2x/octoberfest-celebration-in-pub-free-photo.jpg'
    image.height = '300';
    pageContent.appendChild(image);

    // Create and append headline element
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome To My Restaurant';
    pageContent.appendChild(headline);

    // Create and append copy element
    const ourMantra = document.createElement('p');
    ourMantra.textContent = "Can't live without us!";
    pageContent.appendChild(ourMantra);
    content.appendChild(pageContent);
}

export default createResturantHomePage;
