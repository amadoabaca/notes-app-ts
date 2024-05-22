"use strict";
// Array para almacenar las tareas
let tasks = [];
let taskId = 0;
const taskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('tasks');
addTaskButton.addEventListener('click', () => {
    const description = taskInput.value.trim();
    if (description) {
        addTask(description);
        taskInput.value = '';
        renderTasks();
    }
});
function addTask(description) {
    const newTask = {
        id: taskId++,
        description,
        done: false
    };
    tasks.push(newTask);
}
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.description;
        taskList.appendChild(li);
    });
}
