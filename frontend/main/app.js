const btc  = document.getElementById("btc-price");
const eth  = document.getElementById("eth-price");
const bnb  = document.getElementById("bnb-price");
const adl  = document.getElementById("adl-price");
const sol  = document.getElementById("sol-price");
const xrp  = document.getElementById("xrp-price");
const doge = document.getElementById("doge-price");
const dot  = document.getElementById("dot-price");
const ava  = document.getElementById("ava-price");
const ltc  = document.getElementById("ltc-price");
const logoutbtn = document.getElementById("logoutbtn")

const prices = {};
const prevPrices = {};   // ✅ THIS WAS MISSING

const ws = new WebSocket(
  "wss://stream.binance.com:9443/stream?streams=" +
  [
    "btcusdt@miniTicker",
    "ethusdt@miniTicker",
    "bnbusdt@miniTicker",
    "adausdt@miniTicker",
    "solusdt@miniTicker",
    "xrpusdt@miniTicker",
    "dogeusdt@miniTicker",
    "dotusdt@miniTicker",
    "avaxusdt@miniTicker",
    "ltcusdt@miniTicker"
  ].join("/")
);
logoutbtn.addEventListener('click' , (event) => {
    window.location.href = "../login/login.html";


});

ws.onmessage = function (event) {
  const msg = JSON.parse(event.data);
  const d = msg.data;

  const symbol = d.s;
  const newPrice = parseFloat(d.c);
  const oldPrice = prevPrices[symbol];

  prices[symbol] = newPrice;

  let color = "white";
  if (oldPrice !== undefined) {
    if (newPrice > oldPrice) color = "green";
    else if (newPrice < oldPrice) color = "red";
  }

  prevPrices[symbol] = newPrice;

  if (symbol === "BTCUSDT") {
    btc.innerText =   newPrice;
    btc.style.color = color;
  }
  else if (symbol === "ETHUSDT") {
    eth.innerText =   newPrice;
    eth.style.color = color;
  }
  else if (symbol === "BNBUSDT") {
    bnb.innerText =   newPrice;
    bnb.style.color = color;
  }
  else if (symbol === "ADAUSDT") {
    adl.innerText =   newPrice;
    adl.style.color = color;
  }
  else if (symbol === "SOLUSDT") {
    sol.innerText =   newPrice;
    sol.style.color = color;
  }
  else if (symbol === "XRPUSDT") {
    xrp.innerText =   newPrice;
    xrp.style.color = color;
  }
  else if (symbol === "DOGEUSDT") {
    doge.innerText =   newPrice;
    doge.style.color = color;
  }
  else if (symbol === "DOTUSDT") {
    dot.innerText =   newPrice;
    dot.style.color = color;
  }
  else if (symbol === "AVAXUSDT") {
    ava.innerText =   newPrice;
    ava.style.color = color;
  }
  else if (symbol === "LTCUSDT") {
    ltc.innerText =   newPrice;
    ltc.style.color = color;
  }
};
