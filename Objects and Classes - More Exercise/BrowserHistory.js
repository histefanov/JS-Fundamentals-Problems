function browserHistory(obj, arr) {
    let printBrowserInfo = function(obj) {
        console.log(obj['Browser Name']);
        console.log(`Open Tabs: ${obj['Open Tabs'].join(', ')}`);
        console.log(`Recently Closed: ${obj['Recently Closed'].join(', ')}`);
        console.log(`Browser Logs: ${obj['Browser Logs'].join(', ')}`);
    }

    const browser = JSON.parse(JSON.stringify(obj));
    const actions = arr.slice();
    
    actions.forEach(el => {
        let action = el.split(' ');
        let command = action.shift();
        let page = action.join(' ');

        if (command === 'Open') {
            browser['Open Tabs'].push(page);
            browser['Browser Logs'].push(el);
        } else if (command === 'Close' && browser['Open Tabs'].includes(page)) {
            browser['Open Tabs'].splice(browser['Open Tabs'].indexOf(page), 1);
            browser['Recently Closed'].push(page);
            browser['Browser Logs'].push(el)
        } else if (command === 'Clear') {
            browser['Open Tabs'] = [];
            browser['Recently Closed'] = [];
            browser['Browser Logs'] = [];
        }
    })

    printBrowserInfo(browser);
}

browserHistory({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"])