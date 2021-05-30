import React from "react";

const Single = ({ data: { name, capital, population, languages, flag } }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>capital {capital}</p>
      <p>population {population}</p>
      <ul>
        {languages.map((language) => (
          <li>{language.name}</li>
        ))}
      </ul>
      <img src={flag} alt={name} width="100px" />
    </>
  );
};

export default Single;