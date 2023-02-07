// Saves options to chrome.storage
function save_api_key() {
    var apiKey = document.getElementById('apiKey').value;
    chrome.storage.sync.set({
        'apiKey': apiKey
    }, function() {
      // Update status to let user know apiKey is saved.
      document.getElementById('currentApiKey').innerHTML = "Current saved API key: <b>" + apiKey + "</b>";
    });
}

// Save apikey when user click on save button
document.getElementById('save').addEventListener('click', save_api_key);

// Init current saved apikey
chrome.storage.sync.get(['apiKey'], function(work) {
    document.getElementById('currentApiKey').innerHTML = "Current saved API key: <b>" + work.apiKey + "</b>";
});