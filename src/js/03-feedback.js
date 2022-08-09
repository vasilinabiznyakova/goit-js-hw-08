import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateForm();

function onFormSubmit (evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    console.log(formData);
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onFormInput (evt) {
   
    formData[evt.target.name] = evt.target.value;
    const localStorageDataJSON = JSON.stringify(formData);
    localStorage.setItem(LOCALSTORAGE_KEY, localStorageDataJSON);
}


function populateForm() {
    const localStorageData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (localStorageData) {
       form.email.value = localStorageData.email;
       form.message.value = localStorageData.message;

    }
}
