import { GEO_API_URL, geoApiOptions } from "../../api"
import { AsyncPaginate } from "react-select-async-paginate"
import { useState } from "react"
import './Search.css'
const Search = ({ onSearchChange }) => {

  const [search, setSearch] = useState("")

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(`${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`, geoApiOptions);
      const result = await response.json();
      return {
        options: result.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode} `,
          }
        })
      };
    } catch (error) {
      console.error(error);
    }
  }

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  return (
    <div className="search">
      <AsyncPaginate
        placeholder="Vyhledat město..."
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />

    </div>
  )

}

export default Search