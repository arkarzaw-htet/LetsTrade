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

  prices[d.s] = d.c;

  if (d.s === "BTCUSDT") btc.innerText = d.s + ": " + prices[d.s];
  else if (d.s === "ETHUSDT") eth.innerText = d.s + ": " + prices[d.s];
  else if (d.s === "BNBUSDT") bnb.innerText = d.s + ": " + prices[d.s];
  else if (d.s === "ADAUSDT") adl.innerText = d.s + ": " + prices[d.s];
  else if (d.s === "SOLUSDT") sol.innerText = d.s + ": " + prices[d.s];
  else if (d.s === "XRPUSDT") xrp.innerText = d.s + ": " + prices[d.s];
  else if (d.s === "DOGEUSDT") doge.innerText = d.s + ": " + prices[d.s];
  else if (d.s === "DOTUSDT") dot.innerText = d.s + ": " + prices[d.s];
  else if (d.s === "AVAXUSDT") ava.innerText = d.s + ": " + prices[d.s];
  else if (d.s === "LTCUSDT") ltc.innerText = d.s + ": " + prices[d.s];
};
