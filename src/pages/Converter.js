import React, { useEffect, useState } from "react";

const Converter = () => {
  const [exchange, setExchange] = useState("");
  const [currency, setCurrency] = useState([]);
  const [from, setFrom] = useState("");
  const [amount, setAmount] = useState("");
  const [to, setTo] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchExcahnge = async () => {
    const res = await fetch("https://api.exchangerate.host/symbols");
    const data = await res.json();
    setCurrency(data.symbols);
  };

  const convertCurrency = async () => {
    const res = await fetch(
      `https://api.exchangerate.host/convert?from=${from}&to=${to}`
      // "https://api.exchangerate.host/convert?from=USD&to=NGN"
    );
    const data = await res.json();
    setExchange(data.result);
    console.log(data);
    setLoading();
  };

  useEffect(() => {
    fetchExcahnge();
  }, []);

  const result = Object.keys(currency).map(function (key) {
    return { name: currency[key].code, desc: currency[key].description };
  });

  return (
    <div className="convert_body">
      <div className="amount_convert">
        <h1 className="amount_head">
          {exchange * amount}
          {to}
        </h1>
      </div>

      <div className="input_body">
        <div className="input_head">
          <p>Amount</p>
          <input
            placeholder=""
            className="input_text"
            text=""
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></input>
        </div>

        <div className="select_body">
          <div className="select_head"></div>
          <p>From</p>
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            {result.map((curr, index) => {
              return (
                <option key={index} value={curr.name}>
                  {curr.name} {curr.desc}
                </option>
              );
            })}
          </select>
        </div>

        <div className="select_body">
          <div className="select_head"></div>
          <p>tO</p>
          <select
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
            }}
          >
            {result.map((curr, index) => {
              return (
                <option key={index} value={curr.name}>
                  {curr.name} {curr.desc}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="convert_button">
        <button onClick={convertCurrency}>Convert</button>
      </div>
    </div>
  );
};

export default Converter;
