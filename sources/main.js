import { createComponent } from './functions.js';

fetch('../assets/data.json')
.then(response => response.json())
.then(response => {
    response.data.forEach(element => {
        createComponent(element);
    });

    console.log(response.data);
    console.log(document.querySelector('.rulings-container'))
});