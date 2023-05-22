console.log("background.js");
chrome.runtime.onInstalled.addListener(() => {
  console.log("onInstalled");

  chrome.contextMenus.create({
    id: "tvshow",
    title: "Search to TV Show",
    contexts: ["selection"],
  });

  chrome.contextMenus.create({
    id: "animes",
    title: "animes",
    contexts: ["selection"],
    parentId: "tvshow",
  });

  chrome.contextMenus.onClicked.addListener((info, tab) => {
    info.menuItemId == "animes" &&
      fetch("http://localhost:8000/animes/")
        .then((res) => res.json())
        .then((data) => {
          const titles =   data.results.map((anime)=> anime.title)

          console.log(titles);
          chrome.storage.sync.set({ animes: titles });
        })
        .catch((err) => console.log(err));
  });

  //  chrome.contextMenus.onClicked.addListener((info, tab)=>{
  //     console.log(info.selectionText)
  //     chrome.tabs.create({url: "https://www.imdb.com/find/"+info.selectionText})
  // chrome.search.query({
  //     disposition: "NEW_TAB",
  //     text: info.selectionText
  //   });
  // })
});

// chrome.runtime.on.addListener(()=>{
//     console.log("onStartup")
//     chrome.storage.sync.get(['tvshow'], function(result) {
//         if(result.tvshow){
//             chrome.browserAction.setBadgeText({text: result.tvshow.length.toString()})
//         }
//     });
// })
