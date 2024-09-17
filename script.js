function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const todoList = document.getElementById("todoList");
    const listItem = document.createElement("li");

    listItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div>
            <button class="edit-btn" onclick="editTask(this)">Edit</button>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    listItem.addEventListener("click", function (e) {
        if (e.target.classList.contains('task-text')) {
            this.classList.toggle("completed");
        }
    });

    todoList.appendChild(listItem);
    taskInput.value = "";
}

function deleteTask(button) {
    const listItem = button.parentElement.parentElement;
    listItem.remove();
}

function editTask(button) {
    const listItem = button.parentElement.parentElement;
    const taskText = listItem.querySelector(".task-text");

    const newTaskText = prompt("Edit your task:", taskText.innerText);
    if (newTaskText) {
        taskText.innerText = newTaskText;
    }
}
