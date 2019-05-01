function doIt() {
	browser.tabs.executeScript({ file: "sp_count.js"});
}

browser.browserAction.onClicked.addListener(doIt);
