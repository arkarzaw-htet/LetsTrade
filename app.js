const elements = {
  BTCUSDT: document.getElementById("btc"),
  ETHUSDT: document.getElementById("eth"),
  BNBUSDT: document.getElementById("bnb"),
  ADAUSDT: document.getElementById("adl"),
  SOLUSDT: document.getElementById("sol"),
  XRPUSDT: document.getElementById("xrp"),
  DOGEUSDT: document.getElementById("doge"),
  DOTUSDT: document.getElementById("dot"),
  AVAXUSDT: document.getElementById("ava"),
  LTCUSDT: document.getElementById("ltc")
};

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

ws.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  const d = msg.data;

  prices[d.s] = Number(d.c);

  const el = elements[d.s];
  if (el) {
    el.innerText = `${d.s}: ${prices[d.s]}`;
  }
};
