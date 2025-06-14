document.addEventListener("DOMContentLoaded", function () {
    let tasks = [];
    const addButton = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
    const taskInput = document.getElementById("task-input");

    function renderTask(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        const button = document.createElement("button");
        button.textContent = "Remove";
        button.classList.add("remove-btn");

        button.addEventListener("click", function () {
            taskList.removeChild(li);
            tasks = tasks.filter(t => t !== taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        });

        li.appendChild(button);
        taskList.appendChild(li);
    }

    function loadTasksFromStorage() {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = savedTasks;
        savedTasks.forEach(task => renderTask(task));
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTask(taskText);
        taskInput.value = '';
    }

    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    loadTasksFromStorage();
});
