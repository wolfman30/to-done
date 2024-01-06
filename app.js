function addTask() {
    var input = document.getElementById('taskInput'); 
    var newTask = input.value; 
    if (newTask !== '') {

        var tasksList = document.getElementById('tasksList'); 

        //Create a container for the task and the checkbox
        var taskContainer = document.createElement('div'); 
        taskContainer.className = 'taskContainer'; 

        //Create the checkbox
        var checkbox = document.createElement('input'); 
        checkbox.type = 'checkbox'; 
        checkbox.onclick = function() {
            if (this.checked) {
                taskDiv.style.textDecoration = 'line-through'; 
            } else {
                taskDiv.style.textDecoration = 'none'; 
            }
        }; 

    //Create the task div
    var taskDiv = document.createElement('div'); 
    taskDiv.innerText = newTask; 
    taskDiv.className = 'task'; 

    //Append the checkbox and task divs to the task container
    taskContainer.appendChild(checkbox); 
    taskContainer.appendChild(taskDiv); 

    //Append the task container to the tasks list 
    tasksList.appendChild(taskContainer); 

    input.value = '';
    }
}