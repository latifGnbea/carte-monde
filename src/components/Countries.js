import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRange] = useState(12);
  const radios = ["Africa", "America", "Asia", "Oceania", "Europe"];
  const [radioValue, setRadioValue] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?limit=14")
      .then((r) => setData(r.data));
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min={1}
          max={250}
          defaultValue={rangeValue}
          onChange={(e) => setRange(e.target.value)}
        />

        {radios.map((continent, index) => (
          <li key={index}>
            <input
              type="radio"
              name="continentsRadio"
              id={continent}
              checked={continent === radioValue}
              onChange={(e) => setRadioValue(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {radioValue && (
        <button onClick={() => setRadioValue("")}>Stop search</button>
      )}
      <ul>
        {data
          .slice(0, rangeValue)
          .filter((country) => country.continents[0].includes(radioValue))
          .sort((a, b) => b.population - a.population)
          .map((country, index) => (
            <Card key={index} country={country}></Card>
          ))}
      </ul>
    </div>
  );
};

export default Countries;
