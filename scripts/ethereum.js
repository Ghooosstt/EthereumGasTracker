const getGasPrice = async function(apiKey) {

    const response = await fetch('https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=' + apiKey);
    const myJson = await response.json();
    console.log(myJson);

    if (myJson.message != "OK")
    {
        var checkApiKey = document.getElementById("checkApiKey");
        checkApiKey.innerHTML = "<b>" + myJson.result + "<br><br>Check your API key in the plugin options</b>";
        checkApiKey.hidden = false;
    }
    else
    {
        var tableGasPrice = document.getElementById("gasprice");
        tableGasPrice.rows[1].cells[0].innerHTML = myJson.result.SafeGasPrice + ' gwei';
        tableGasPrice.rows[1].cells[1].innerHTML = myJson.result.ProposeGasPrice + ' gwei';
        tableGasPrice.rows[1].cells[2].innerHTML = myJson.result.FastGasPrice + ' gwei';
    }
}

chrome.storage.sync.get(['apiKey'], function(work) {
    getGasPrice(work.apiKey);
});