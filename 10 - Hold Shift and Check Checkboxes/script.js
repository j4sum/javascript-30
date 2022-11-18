// select all checkboxes so we can listen to each of them
const checkboxes = document.querySelectorAll('.inbox input[type=checkbox');

// check first one and put into a variable because when we check last one and hold down shift we need to know the last checked box
let lastChecked;

function handleCheck(e) {
    // console.log(e);
    let inBetween = false;

    // check if they had the shift key down
    // AND check to see if they are checking that it is down

    if (e.shiftKey && this.checked) {
        // add what you please
        // loop over every single checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('starting to check them in between');
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });

    }
    lastChecked = this;
}

// loop over each checkbox and listen for a click event and once clicked, run handleCheck function
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));