console.clear();

const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // creates a new formData Object, which collects all the data from the form; it holds the name-value pairs of the form fields (e.g. inputs, selects etc.)
    //event.target refers to the form element that was submitted
    const formData = new FormData(event.target);
    //converts FormData object into a regular JS object; FormData is an iterable object (like an array), where each entry is a key-value pair; Object.from Entries() takes this iterable and converts it into a plain object
    //formData [['firstName', 'John']] after Object.fromEntries(formData) {firstName:'John'}
    const data = Object.fromEntries(formData);
    console.log(data);
    event.target.reset();
    event.target.elements.firstName.focus();
})