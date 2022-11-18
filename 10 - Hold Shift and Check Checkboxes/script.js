// select all checkboxes so we can listen to each of them
const checkboxes = document.querySelectorAll('.inbox input[type=checkbox]');

let lastChecked;

function handleCheck(e) {
    //console.log(e);
    // lastChecked = this;

    let inBetween = false;

    // check if they had the shift key down
    // AND check to see if they are checking the box
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('check in between items on the list');
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
}

// loop over each checkbox and listen for a click event and once clicked, run handleCheck function
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));