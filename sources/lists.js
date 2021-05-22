const listType = document.querySelector('input[name="list-type"][value="list"]');
const gridType = document.querySelector('input[name="list-type"][value="grid"]');

const displayList = () => {
    const LIST_CSS = '<link rel="stylesheet" href="./css/list.css">';
    const rulingsMainContainer = document.querySelector('.list-link');
    const listSelected = document.querySelector('.list-type');  

    if (listType.checked === true) {
        rulingsMainContainer.innerHTML = LIST_CSS;
        listSelected.innerText = 'List';
    } else {
        rulingsMainContainer.innerHTML = "";
        listSelected.innerText = 'Grid';
    }
}

listType.addEventListener('change', displayList);
gridType.addEventListener('change', displayList);

