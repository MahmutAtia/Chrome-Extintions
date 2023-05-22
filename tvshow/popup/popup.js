
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


const sendBtn = document.getElementById('sender');
sendBtn.addEventListener('click', () => {
     console.log('send button clicked');
    chrome.runtime.sendMessage({message: "highlite"}, function(response) {
        console.log(response);
      })
});

chrome.storage.sync.get(['animes']).then((result)=>{
    animes = result? result.animes: []; 
    addbtn.innerHTML =  animes ? animes[0]  : "no animes";
})
