import { createComponent } from './functions.js';

fetch('../assets/data.json')
.then(response => response.json())
.then(response => {
    response.data.forEach(element => {
        createComponent(element);
    });
});