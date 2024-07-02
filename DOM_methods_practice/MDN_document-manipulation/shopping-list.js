const ul = document.querySelector('ul');
const input = document.querySelector('input');
const addButton = document.querySelector('#add-button');

addButton.style.color = 'red';

addButton.addEventListener('click', () => {
    if (input.value === '') {
        alert('Please enter an item');
        return;
    }
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    const span = document.createElement('span');
    span.textContent = input.value;

    li.appendChild(span);
    li.appendChild(deleteButton);
    ul.appendChild(li);

    deleteButton.addEventListener('click', () => {
        deleteButton.parentElement.remove();
    });

    input.value = '';

    input.focus();
});