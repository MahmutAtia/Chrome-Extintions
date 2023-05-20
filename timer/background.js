chrome.alarms.create({ periodInMinutes: 1 / 60 });
this.registration.showNotification("Vibration Sample", {
    body: "Buzz! Buzz!",
  });

chrome.alarms.onAlarm.addListener((alarm)=>{


    chrome.storage.local.get("timer").then((res) => {
       
        const timer = res.timer ?? 0;
        chrome.storage.local.set({ timer: timer + 1 });
        console.log(timer);
        chrome.action.setBadgeText({ text: timer.toString() });

        

       
      })

     

}
  );
  