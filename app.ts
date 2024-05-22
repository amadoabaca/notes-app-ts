interface Task {
    id: number;
    description: string;
    done: boolean;
}

// Array para almacenar las tareas
let tasks: Task[] = [];
let taskId = 0;

const taskInput = document.getElementById('new-task') as HTMLInputElement;
const addTaskButton = document.getElementById('add-task') as HTMLButtonElement;
const taskList = document.getElementById('tasks') as HTMLUListElement;

addTaskButton.addEventListener('click', () => {
    const description = taskInput.value.trim();
    if (description) {
        addTask(description);
        taskInput.value = '';
        renderTasks();
    }
});

function addTask(description: string) {
    const newTask: Task = {
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