chrome.webNavigation.onHistoryStateUpdated.addListener(({ tabId, url }) => {
  if (url.includes("reviews"))
    chrome.tabs.sendMessage(tabId, {
      type: "MOUNT_REVIEWS",
      url,
    });
});
