import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
// const enteredData = {};

initForm();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('change', throttle(onFormChange, 500));



function onFormSubmit (evt) {
    evt.preventDefault();
    const formData = new FormData(form);
}

function onFormChange (evt) {
    
    let selectedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
    selectedFilters = selectedFilters? JSON.parse(selectedFilters): {};
    selectedFilters[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(selectedFilters));
}



function initForm() {
    let savedData = localStorage.getItem(LOCALSTORAGE_KEY);

    if (savedData) {
        savedData = JSON.parse(savedData);

        Object.entries(savedData).forEach(([name, value]) => {
            form.elements[name].value = value;
    })
   
    }

}
