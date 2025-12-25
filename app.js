const btc  = document.getElementById("btc");
const eth  = document.getElementById("eth");
const bnb  = document.getElementById("bnb");
const adl  = document.getElementById("adl");
const sol  = document.getElementById("sol");
const xrp  = document.getElementById("xrp");
const doge = document.getElementById("doge");
const dot  = document.getElementById("dot");
const ava  = document.getElementById("ava");
const ltc  = document.getElementById("ltc");


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

const prices = {};

ws.onmessage = function (event) {
  const msg = JSON.parse(event.data);
  const d = msg.data;

  const symbol = d.s;
  const newPrice = parseFloat(d.c);
  const oldPrice = prevPrices[symbol];

  prices[symbol] = newPrice;

  let color = "black";
  if (oldPrice !== undefined) {
    if (newPrice > oldPrice) color = "green";
    else if (newPrice < oldPrice) color = "red";
  }

  prevPrices[symbol] = newPrice;

  if (symbol === "BTCUSDT") {
    btc.innerText = symbol + ": " + newPrice;
    btc.style.color = color;
  }
  else if (symbol === "ETHUSDT") {
    eth.innerText = symbol + ": " + newPrice;
    eth.style.color = color;
  }
  else if (symbol === "BNBUSDT") {
    bnb.innerText = symbol + ": " + newPrice;
    bnb.style.color = color;
  }
  else if (symbol === "ADAUSDT") {
    adl.innerText = symbol + ": " + newPrice;
    adl.style.color = color;
  }
  else if (symbol === "SOLUSDT") {
    sol.innerText = symbol + ": " + newPrice;
    sol.style.color = color;
  }
  else if (symbol === "XRPUSDT") {
    xrp.innerText = symbol + ": " + newPrice;
    xrp.style.color = color;
  }
  else if (symbol === "DOGEUSDT") {
    doge.innerText = symbol + ": " + newPrice;
    doge.style.color = color;
  }
  else if (symbol === "DOTUSDT") {
    dot.innerText = symbol + ": " + newPrice;
    dot.style.color = color;
  }
  else if (symbol === "AVAXUSDT") {
    ava.innerText = symbol + ": " + newPrice;
    ava.style.color = color;
  }
  else if (symbol === "LTCUSDT") {
    ltc.innerText = symbol + ": " + newPrice;
    ltc.style.color = color;
  }
};
