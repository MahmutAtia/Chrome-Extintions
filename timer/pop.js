const element = document.getElementById("time");
const nameElemant = document.getElementById("name");
const timerElemant = document.getElementById("timer");



chrome.storage.sync.get(["name"]).then((res) => {
  const name = (res.name);
  nameElemant.innerHTML = name
});


const timeFunction = ()=>{
    chrome.storage.local.get(["timer"]).then(res=>{
        timerElemant.innerHTML =  res.timer 
        element.innerHTML = new Date().toLocaleTimeString();
     
     })

}


setInterval(()=>timeFunction(),
1000)

