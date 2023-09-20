import React from "react";

const Card = ({ country }) => {
  console.log();
  return (
    <li className="card">
      <img
        src={country.flags.svg}
        alt={`drapeau ${country.translations.fra.common}`}
      />
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
        <h4>
          <i>{country.capital}</i>
        </h4>
        <p>Pop : {country.population.toLocaleString()}</p>
      </div>
    </li>
  );
};

export default Card;
