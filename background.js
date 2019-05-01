function doIt() {
	browser.tabs.executeScript({ file: "sp_count.js"});
}

// The below line adds a listener to when the extension icon is clicked on the browser tool bar. The doIt() function simply executes another script in the context of the active tab. 
browser.browserAction.onClicked.addListener(doIt);
