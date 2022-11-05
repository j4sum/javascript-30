const inputs = document.querySelectorAll('.controls input'); // gives us a NodeList

function handleUpdate() {
    // console.log(this.value);
    const suffix = this.dataset.sizing || ''; // get data attribute sizing from the dataset by creating a suffix variable
    //console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));