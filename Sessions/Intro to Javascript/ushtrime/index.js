// script.js

// Event listener for the Add Task button
document.getElementById('addBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    // If the task input is empty, return early
    if (taskText === '') return;

    // Create the new list item (li)
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    `;

    // Add the event listener to the delete button
    const deleteBtn = li.querySelector('.delete');
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    // Add event listener for marking the task as done (strikethrough)
    li.addEventListener('click', () => {
        li.classList.toggle('done');
    });

    // Add event listener to edit the task
    const editBtn = li.querySelector('.edit');
    editBtn.addEventListener('click', (e) => {
        const taskSpan = li.querySelector('.task-text');
        const newTaskText = prompt('Edit your task:', taskSpan.textContent);

        if (newTaskText) {
            taskSpan.textContent = newTaskText;
        }
        // Stop the event from bubbling up (this prevents marking the task as done on edit)
        e.stopPropagation();
    });

    // Append the new task to the task list
    document.getElementById('taskList').appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = '';
}