var API_KEY = "YOUR_API_KEY"

const getGasPrice = async () => {

    const response = await fetch('https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=' + API_KEY);
    const myJson = await response.json();
    console.log(myJson);

    var tableGasPrice = document.getElementById("gasprice");
    tableGasPrice.rows[1].cells[0].innerHTML = myJson.result.SafeGasPrice + ' gwei';
    tableGasPrice.rows[1].cells[1].innerHTML = myJson.result.ProposeGasPrice + ' gwei';
    tableGasPrice.rows[1].cells[2].innerHTML = myJson.result.FastGasPrice + ' gwei';
}

getGasPrice();