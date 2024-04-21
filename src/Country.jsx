import { useState } from "react";

const Country = ({ country }) => {
  console.log(country);
  const { name, flags, capital } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () =>{
    setVisited(!visited);
  };

  return (
    <div className="box">
      <h3>{name.common}</h3>
      <img src={flags.png} alt="" />
      <div className="boxs">
        <p>Capital: {capital}</p>
        <p>Continents: {country.continents}</p>
        <button onClick={handleVisited}>{visited ? 'Visited' : 'Go..'}</button>
      </div>
    </div>
  );
};

export default Country;
