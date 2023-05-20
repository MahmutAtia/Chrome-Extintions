const input = document.getElementById("input");
const btn = document.getElementById("btn")

btn.addEventListener("click", ()=>{
    const name = input.value
    chrome.storage.sync.set(
       { name,}, ()=>alert("you saved your name " + name)

    )
    
})