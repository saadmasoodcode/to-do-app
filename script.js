// Selectors ****************************
const input = document.getElementById('input');
const addButton = document.getElementById('addButton');
const toDoList = document.getElementById('toDoList');
const check = document.querySelector('.checkbox');
const remove = document.querySelector('.remove');
const clearAll = document.querySelector('#clear');
const filter = document.querySelector('#todo-filter');

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
	filter.value = 'all';
	save();
});
filter.addEventListener('click', filterToDo);
// window.addEventListener('DOMContentLoaded', getTodos);
//Functions *********************

function addTask(e) {
	if (input.value === '') {
		alert('PLease type something in input field');
	} else {
		const div = document.createElement('div');
		const firstChild = toDoList.firstChild;
		toDoList.insertBefore(div, firstChild);
		div.classList.add('toDos');

		const li = document.createElement('li');
		div.appendChild(li);
		li.innerHTML = input.value;

		// saveTodos(input.value);

		const btn = document.createElement('button');
		div.appendChild(btn);
		btn.classList.add('checkbox');
		btn.innerHTML = '<i class="fa-regular fa-square-check"></i>';

		const btn2 = document.createElement('button');
		div.appendChild(btn2);
		btn2.classList.add('remove');
		btn2.innerHTML = '<i class="fa-solid fa-xmark"></i>';

		input.value = '';
		save();
	}
}

function deleteCheck(e) {
	const item = e.target;
	if (item.classList[0] === 'remove') {
		const todo = item.parentElement;
		// removeTodos(todo);
		todo.remove();
		save();
	}

	if (item.classList[0] === 'checkbox') {
		const todo = item.parentElement;
		todo.classList.toggle('completed');
		save();
	}
}

function filterToDo(e) {
	const todos = toDoList.childNodes;
	todos.forEach(function (todo) {
		switch (e.target.value) {
			case 'all':
				todo.style.display = 'flex';
				break;
			case 'completed':
				if (todo.classList.contains('completed')) {
					todo.style.display = 'flex';
				} else {
					todo.style.display = 'none';
				}
				break;
			case 'incomplete':
				if (!todo.classList.contains('completed')) {
					todo.style.display = 'flex';
				} else {
					todo.style.display = 'none';
				}
		}
	});
}

// function saveTodos(todo) {
// 	let todos;
// 	if (localStorage.getItem('todos') === null) {
// 		todos = [];
// 	} else {
// 		todos = JSON.parse(localStorage.getItem('todos'));
// 	}
// 	todos.push(todo);
// 	localStorage.setItem('todos', JSON.stringify(todos));
// }

// function getTodos(todo) {
// 	let todos;
// 	if (localStorage.getItem('todos') === null) {
// 		todos = [];
// 	} else {
// 		todos = JSON.parse(localStorage.getItem('todos'));
// 	}

// 	todos.forEach(function (todo) {
// 		const div = document.createElement('div');
// 		const firstChild = toDoList.firstChild;
// 		toDoList.insertBefore(div, firstChild);
// 		div.classList.add('toDos');

// 		const li = document.createElement('li');
// 		div.appendChild(li);
// 		li.innerHTML = todo;

// 		const btn = document.createElement('button');
// 		div.appendChild(btn);
// 		btn.classList.add('checkbox');
// 		btn.innerHTML = '<i class="fa-regular fa-square-check"></i>';

// 		const btn2 = document.createElement('button');
// 		div.appendChild(btn2);
// 		btn2.classList.add('remove');
// 		btn2.innerHTML = '<i class="fa-solid fa-xmark"></i>';
// 	});
// }

// function removeTodos(todo) {
// 	let todos;
// 	if (localStorage.getItem('todos') === null) {
// 		todos = [];
// 	} else {
// 		todos = JSON.parse(localStorage.getItem('todos'));
// 	}
// 	const todoIndex = todo.children[0].innerText;
// 	todos.splice(todos.indexOf(todoIndex), 1);
// 	localStorage.setItem('todos', JSON.stringify(todos));
// }

function save() {
	localStorage.setItem('todos', toDoList.innerHTML);
}

function get() {
	toDoList.innerHTML = localStorage.getItem('todos');
}

get();
