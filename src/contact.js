
// Module for creating the contact page
const createContactPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // Create and append form
    const form = document.createElement('input');
    form.classList.add('contact-form');

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Enter your name';
    form.appendChild(nameInput);

    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.placeholder = 'Enter your address';
    form.appendChild(addressInput);

    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.placeholder = 'Enter your phone number';
    form.appendChild(phoneInput);

    pageContent.appendChild(form);
    content.appendChild(pageContent);
}

export default createContactPage;