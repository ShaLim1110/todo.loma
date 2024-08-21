document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('newTask');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Add Task
    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            return;
        }
        
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center todo-item';
        
        listItem.innerHTML = `
            ${taskText}
            <button class="btn btn-danger btn-sm ml-2 remove-task-button">Remove</button>
        `;
        
        taskList.appendChild(listItem);
        taskInput.value = '';
    });

    // Remove Task
    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-task-button')) {
            const taskItem = event.target.closest('.todo-item');
            taskList.removeChild(taskItem);
        }
    });
});
