
// The index.js will run our js
const app = new App();


// These function will open and close the Review Form
function openForm(){
    document.getElementById('new-review-container').style.display = "block";
}
function closeForm() {
    document.getElementById('new-review-container').style.display = "none";
}