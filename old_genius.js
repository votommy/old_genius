chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      if (!details.url.includes("?bagon=1")) {
        // Modify the URL
        return {redirectUrl: details.url + "?bagon=1"};
      }
    },
    {urls: ["https://genius.com/*-lyrics"]},
    ["blocking"]
  );
  