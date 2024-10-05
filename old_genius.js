chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
        addRules: [{
           id: 1,
           priority: 1,
           action: { type: 'redirect', redirect: { transform: { queryTransform: { addOrReplaceParams: [{ key: 'bagon', value: '1' }] } } } },
           condition: { urlFilter: 'https://genius.com/*-lyrics', resourceTypes: ['main_frame'] }
        }],
        removeRuleIds: [1]
    });
});
  