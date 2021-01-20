import "./App.css";
import Image1 from "./images/Image1.jpg";
import Image2 from "./images/Image2.jpg";
import Image3 from "./images/image3.jpg";
import Image4 from "./images/image4.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import Select from 'react-select'

function App() {

  const handleChange = (option) => {
    setcurrenyExchange(option)
    if (option.value === 'Rupees') {
      setexchangeValue(1)
    }
    else {
      axios.get("https://api.exchangeratesapi.io/latest?base=INR").then((res) => {
        setexchangeValue(res.data.rates.USD);
      });
    }
  }

  const options = [
    { value: 'Rupees', label: 'INR' },
    { value: 'Dollars', label: 'USD' }
  ];

  const [currenyExchange, setcurrenyExchange] = useState('');
  const [exchangeValue, setexchangeValue] = useState(1);

  const Data = [
    {
      pricing: exchangeValue === 1 ? 100 : 100 * exchangeValue,
      imageURL: Image1,
    },
    {
      pricing: exchangeValue === 1 ? 120 : 120 * exchangeValue,
      imageURL: Image2,
    },
    {
      pricing: exchangeValue === 1 ? 140 : 140 * exchangeValue,
      imageURL: Image3,
    },
    {
      pricing: exchangeValue === 1 ? 160 : 160 * exchangeValue,
      imageURL: Image4,
    },
  ];
  return (
    <div className="App">
      {Data.map((data) => {
        return (
          <div className="imageDiv" key={data.pricing}>
            <img
              src={data.imageURL}
              alt="logo"
              height="150px"
              width="150px"
            ></img>
            <div className="priceDiv">{data.pricing}{exchangeValue === 1 ? "Rupees" : "dollars"}</div>
          </div>
        );
      })}
      <div className="currencyClass">
        currency
        <Select
          value={currenyExchange}
          onChange={handleChange}
          options={options}
        />
      </div>
    </div>
  );
}

export default App;
