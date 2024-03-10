// Selectors ****************************
const input = document.getElementById('input');
const addButton = document.getElementById('addButton');
const toDoList = document.getElementById('toDoList');
const check = document.querySelector('.checkbox');
const remove = document.querySelector('.remove');
const clearAll = document.querySelector('#clear');

// Event *************************

addButton.addEventListener('click', addTask);
toDoList.addEventListener('click', deleteCheck);
input.addEventListener('keydown', function (e) {
	if (e.keyCode === 13) {
		addTask();
	}
});
clearAll.addEventListener('click', function (e) {
	toDoList.innerHTML = '';
});

//Functions *********************

function addTask(e) {
	const div = document.createElement('div');
	toDoList.appendChild(div);
	div.classList.add('toDos');

	const li = document.createElement('li');
	div.appendChild(li);
	li.innerHTML = input.value;

	const btn = document.createElement('button');
	div.appendChild(btn);
	btn.classList.add('checkbox');
	btn.innerHTML = '<i class="fa-regular fa-square-check"></i>';

	const btn2 = document.createElement('button');
	div.appendChild(btn2);
	btn2.classList.add('remove');
	btn2.innerHTML = '<i class="fa-solid fa-xmark"></i>';

	input.value = '';
}

function deleteCheck(e) {
	const item = e.target;
	if (item.classList[0] === 'remove') {
		const todo = item.parentElement;
		todo.remove();
	}

	if (item.classList[0] === 'checkbox') {
		const todo = item.parentElement;
		todo.classList.toggle('completed');
	}
}
