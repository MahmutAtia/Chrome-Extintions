
const addbtn = document.getElementById('add');



addbtn.addEventListener('click', () => {
 
addTask();
console.log('add button clicked');
});


function addTask() {
    const taskrow = document.createElement('div');
    taskrow.classList.add('row');

 const input = document.createElement('input');
 const deletebtn = document.createElement('button');
 deletebtn.innerHTML = 'X';

    taskrow.appendChild(input);
    taskrow.appendChild(deletebtn);

    const tasklist = document.getElementById('taskContainer');
    tasklist.appendChild(taskrow);


}