function retrieveTasks(){
    return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response=>response.json());
}

function  displayTasks(tasks){
    const todolist=document.getElementById('todolist');
    let completedTasksCount =0;

    tasks.forEach(task=>{
        const listItem=document.createElement('li');

        const checkbox=document.createElement('input');
        checkbox.type=`checkbox`;
        checkbox.id=`task-${task.id}`;
        checkbox.checked= false;
        const label=document.createElement('label');
        label.textContent=task.title;
        label.htmlFor=`task-${task.id}`;

        listItem.appendChild(checkbox);
        listItem.appendChild(label);

        todolist.appendChild(listItem);

        checkbox.addEventListener(`change`,()=>{
            if(checkbox.checked){
                completedTasksCount++;
                checkbox.disabled=true;
            }
            else{
                completedTasksCount--;
                checkbox.disabled=false;
            }
            if(completedTasksCount%5===0){
                alert(`congrats. ${completedTasksCount} Tasks have been completed`)
            }
        });
    });
}
function main(){
    retrieveTasks()
    .then(displayTasks)
    .catch(error=>console.error('Error retrieving'))
}
main();