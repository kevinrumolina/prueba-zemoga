const getDateDifference = startDate => {
    const today = new Date();
    const date = new Date(startDate);
    const difference = (today - date);

    if (difference / (1000 * 60 * 60 * 24 * 365) > 1) {
        const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
        return years >= 2 ? `${years} years ago` : `${years} year ago`;
    } else if (difference / (1000 * 60 * 60 * 24 * 30) > 1) {
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        return months >= 2 ? `${months} months ago` : `${months} month ago`;
    } else if (difference / (1000 * 60 * 60 * 24) > 1) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        return days >= 2 ? `${days} days ago` : `${days} day ago`;
    } else if (difference / (1000 * 60 * 60) > 1) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        return hours >= 2 ? `${hours} hours ago` : `${hours} hour ago`;
    } else {
        const minutes = Math.floor(difference / (1000 * 60));
        return minutes >= 2 ? `${minutes} minutes ago` : `${minutes} minute ago`;
    }
};

const winningVote = (positive, negative, node) => {
    const winningContainer = node.querySelector('.ruling-block__winning--vote');
    const thumbsUp = '<img src="./assets/img/thumbs-up.svg" alt="thumbs up"></img>';
    const thumbsDown = '<img src="./assets/img/thumbs-down.svg" alt="thumbs down">';

    positive >= negative ? winningContainer.className = 'positive ruling-block__winning--vote' : winningContainer.className = 'negative ruling-block__winning--vote';
    positive >= negative ? winningContainer.innerHTML = thumbsUp : winningContainer.innerHTML = thumbsDown;
};

const setVotationContainer = (positive, negative, node) => {
    const totalVotes = positive + negative;
    const positivePercentaje = ((positive / totalVotes) * 100).toFixed(2);
    const negativePercentaje = ((negative / totalVotes) * 100).toFixed(2);
    const positiveContainer = node.querySelector('.positive');
    const negativeContainer = node.querySelector('.negative');
    const thumbsUp = '<img src="./assets/img/thumbs-up.svg" alt="thumbs up"></img>';
    const thumbsDown = '<img src="./assets/img/thumbs-down.svg" alt="thumbs down">';

    positiveContainer.innerHTML = `${positivePercentaje}% ${thumbsUp}`;
    positiveContainer.style.width = `${positivePercentaje}%`;
    negativeContainer.innerHTML = `${negativePercentaje}% ${thumbsDown}`;
    negativeContainer.style.width = `${negativePercentaje}%`;
};

const createComponent = data => {
    const componentInnerHtml = '<img class="ruling-image" src="" alt=""><div class="ruling-block__winning--vote vote-block"></div><div class="ruling-block__linear--gradient"><h2 class="ruling-block__title"></h2><p class="ruling-block__excerpt"></p><p class="ruling-block__last--update"></p><div class="ruling-block__vote--container"><button class="icon-button" aria-label="thumbs up"><img src="assets/img/thumbs-up.svg" alt="thumbs up" /></button><button class="icon-button" aria-label="thumbs down"><img src="assets/img/thumbs-down.svg" alt="thumbs down" /></button><button class="ruling-block__vote" disabled>Vote Now</button></div><div class="ruling-block__votation--container"><div class="positive"><img src="./assets/img/thumbs-up.svg" alt="thumbs up"></div><div class="negative"><img src="./assets/img/thumbs-down.svg" alt="thumbs down"></div></div></div>'

    const mainContainer = document.querySelector('.rulings-container')
    const componentContainer = Object.assign(document.createElement('article'), {className: 'ruling-block'});

    componentContainer.innerHTML = componentInnerHtml;

    Object.assign(componentContainer.querySelector('.ruling-image'), {src: `./assets/img/${data.picture}`, alt: `${data.name} thumbnail`});
    Object.assign(componentContainer.querySelector('.ruling-block__title'), {innerText: data.name});
    winningVote(data.votes.positive, data.votes.negative, componentContainer)
    Object.assign(componentContainer.querySelector('.ruling-block__excerpt'), {innerText: data.description});
    Object.assign(componentContainer.querySelector('.ruling-block__last--update'), {innerText: `${getDateDifference(data.lastUpdated)} in ${data.category}`});
    setVotationContainer(data.votes.positive, data.votes.negative, componentContainer.querySelector('.ruling-block__votation--container'));

    mainContainer.appendChild(componentContainer);
}

export { createComponent };