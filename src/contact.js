// module for creating the contact page of restaurant.
const createContentPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const form = document.createElement('form');
    form.classList.add('contact-form');

    const headingInput = document.createElement('input');
    headingInput.type = 'text';
    headingInput.placeholder = 'Enter heading';
    form.appendChild(headingInput);

    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.placeholder = 'Enter address';
    form.appendChild(addressInput);

    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.placeholder = 'Enter your phone no.'
    form.appendChild(phoneInput);

    const submitBtn = document.createElement('input');
    submitBtn.type = 'sumit';
    submitBtn.placeholder = 'Enter your phone no.'
    form.appendChild(submitBtn);

    pageContent.appendChild(form);
    content.appendChild(pageContent);

};

export default createContentPage;