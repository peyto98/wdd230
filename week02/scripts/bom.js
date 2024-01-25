const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value) {
        const li = document.createElement('li');
        const deleteBotton = document.createElement('button');

        li.textContent = input.value;
        deleteBotton.textContent = '❌';

        deleteBotton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus;
        })

        li.appendChild(deleteBotton);

        list.appendChild(li);

        input.value = '';
    }

    input.focus();
});