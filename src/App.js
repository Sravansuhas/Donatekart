import "./App.css";
import Image1 from "./images/Image1.jpg";
import Image2 from "./images/Image2.jpg";
import Image3 from "./images/image3.jpg";
import Image4 from "./images/image4.jpg";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [currenyExchange, setcurrenyExchange] = useState("");
  useEffect(() => {
    axios.get("https://api.exchangeratesapi.io/latest?base=INR").then((res) => {
      setcurrenyExchange(res.data.rates.USD);
    });
  }, []);
  const Data = [
    {
      pricing: "100 Rupees",
      imageURL: Image1,
    },
    {
      pricing: "120 Rupees",
      imageURL: Image2,
    },
    {
      pricing: "140 Rupees",
      imageURL: Image3,
    },
    {
      pricing: "160 Rupees",
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
            <div className="priceDiv">{data.pricing}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
