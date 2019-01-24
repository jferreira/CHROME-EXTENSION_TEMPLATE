chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="#C3413B"'
  });
});

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     //code in here will run every time a user goes onto a new tab,
//     //so you can insert your scripts into every new tab
// });
