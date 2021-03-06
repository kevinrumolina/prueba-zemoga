import { createComponent, countVote } from './functions.js';

if (window.localStorage.data === undefined) {
    fetch('../assets/data.json')
    .then(response => response.json())
    .then(response => {
        window.localStorage.data = JSON.stringify(response.data);

        response.data.forEach(element => {
            createComponent(element);
        });

        const voteContainers = document.querySelectorAll('.voteNow .ruling-block__vote');

        voteContainers.forEach(container => {
            container.addEventListener('click', countVote);
        });
    });
} else {
    let data;
    data = JSON.parse(window.localStorage.data);
    
    data.forEach(element => {
        createComponent(element);
    });

    const voteContainers = document.querySelectorAll('.voteNow .ruling-block__vote');

    voteContainers.forEach(container => {
        container.addEventListener('click', countVote);
    });
}
