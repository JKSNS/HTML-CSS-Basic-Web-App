// script.js: BYU IT&C 210a JavaScript
function on_submit(event) {
    let formData = new FormData(event.currentTarget);
    let json = JSON.stringify(Object.fromEntries(formData));
    alert(json);
    event.preventDefault();
}
// Insert the Lab 1b JavaScript here.