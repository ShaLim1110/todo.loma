document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('newTask');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            return;
        }

        Swal.fire({
            title: "Add Kana",
            width: 500,
            padding: "9em",
            color: "#716add",
            background: "url('https://i.pinimg.com/564x/a1/c2/16/a1c2165da6a9ffbf6482da8109d591f8.jpg')", // Use relative path
            
            showConfirmButton: true,
            confirmButtonText: "OK"
        }).then((result) => {
            if (result.isConfirmed) {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item d-flex justify-content-between align-items-center todo-item';
                
                listItem.innerHTML = `
                    ${taskText}
                    <button class="btn btn-danger btn-sm ml-2 remove-task-button">Remove</button>
                `;
                
                taskList.appendChild(listItem);
                taskInput.value = '';
                
                Swal.fire("Added Successfully!", "", "success");
            }
        });
    });

    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-task-button')) {
            const taskItem = event.target.closest('.todo-item');
            
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    taskList.removeChild(taskItem);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your task has been deleted.",
                        icon: "success"
                    });
                }
            });
        }
    });
});
