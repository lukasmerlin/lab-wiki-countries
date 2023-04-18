import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
    const { alpha3Code } = useParams();
  
    const country = countries.find(
      (country) => country.alpha3Code === alpha3Code
    );
  
    const { name, capital, area, borders, alpha2Code } = country;
  
    return (
      <div className="col-7">
        <img
          className=""
          src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`}
          alt="country flag"
        />
        <h1>{name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {borders.map((border) => {
                    return (
                      <li key={border}>
                        <Link to={`/${border}`}>{border}</Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default CountryDetails;
  