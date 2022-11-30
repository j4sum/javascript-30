const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = []; // store in array with name and status of items


function addItem(e) {
    e.preventDefault(); // prevents page reloading because by default our form reloads the page or send the data to external source (server side).
    const text = (this.querySelector('[name=item]')).value; // 'this' is the form and we look inside the form for the name attribute of item
    const item = {
        text, // ES6 shorthand property
        done: false // default not checked
    };
    // console.log(item);
    items.push(item);
    this.reset();
}

function populateList(plates = [], platesList) { // empty object loop and a place to put HTML
    platesList.innerHTML = plates.map((plate, i) => {
        return ``;
    });

}

addItems.addEventListener('submit', addItem); // submit when someone clicks on the button or enters