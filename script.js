document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
    const taskInput = document.getElementById("task-input");
    function addTask () {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
        else{
            const li = document.createElement("li");
            li.textContent = taskText;
            const button = document.createElement("button");
            button.textContent = "Remove";
            button.classList.add("remove-btn");
            button.addEventListener("click", function() {
                taskList.removeChild(li);
            });
            li.appendChild(button);
            taskList.appendChild(li);
             // Clear input field after adding the task
             taskInput.value = '';
             };
    };
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
document.addEventListener("DOMContentLoaded", addTask);