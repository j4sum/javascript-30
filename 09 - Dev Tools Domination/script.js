const cats = [{ name: 'pickle', age: 2 }, { name: 'boba', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hi');

// Interpolated
console.log('Hello, I am a %s string!', '🤡')
    // console.log(`I am a string ${var}`) // ES6

// Styled
// console.log('%c I am a great string', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')

// warning!
console.warn('Oh Noooo!'); // stack trace where it got called

// Error :|
console.error('Oh shoot'); // stack trace

// Info
console.info('UK is an Island');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong');

// clearing
console.clear(); // clear console

// Viewing DOM Elements
console.log(p); // shows actual element
console.dir(p); // opens DOM to look at properties and methods

// Grouping together
cats.forEach(cat => {
    console.groupCollapsed(`${cats}`);
    console.log(`${cat.name} is ${cat.age} years old`);
    console.log(`${cat}.name} is ${cat.age * 7} cat years old`);
    console.groupEnd(`${cat.name}`);
});

// counting
console.count('wes'); // counts however many times you use a specific word, num, object, DOM node
console.count('wes');
console.count('alex');
console.count('wes');

// timing
console.time('fetching data'); // start timer to fetch data
fetch('https://api.github.com/users/wesbos') // fetch data from github
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data'); // pass same string that was used to start it
        console.log(data); //log data at that time
    });

//table
console.table() //take an array of objects (cats), object (each cat) and assuming they have same properties: name, age display table