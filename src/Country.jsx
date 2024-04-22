import { useState } from "react";

const Country = ({ country }) => {
  const { name, flags, capital, continents } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`box country ${visited ? 'visited' : 'non-visited'}`}>
      <h3>{name.common}</h3>
      <img src={flags.png} alt="" />
      <div>
        <p>Capital: {capital}</p>
        {continents && <p>Continents: {country.continents}</p>}
        <button onClick={handleVisited}>{visited ? 'Visited' : 'Go..'}</button>
      </div>
    </div>
  );
};

export default Country;
