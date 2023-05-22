console.log("content.js")

document.addEventListener('mouseup', function(event) {
    var selection = window.getSelection().toString();
    if(selection.length){
        chrome.runtime.sendMessage({message: "selection", selection: selection}, function(response) {
            console.log(response);
          });
    }
});


for (const element of document.getElementsByTagName("a")) {
   element.backgroundColor = "red" ;
   console.log(element.href)
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{

    console.log(request)
        
})