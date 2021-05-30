import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Single from './components/singleCountry.js'
 const App = ()=>{

  const[select,setSelect] = useState([])
  const[country, setCountry] = useState('')
  const [countriesFilter, setCountriesFilter] = useState([]);
  useEffect(()=>{
  axios
  .get("https://restcountries.eu/rest/v2/all")
  .then(response=>
  {setSelect(response.data)})
  },[]) 


  

  const handleChange =(event) =>
  {
    setCountry(event.target.value)
    setCountriesFilter(
      select.filter(
        (country) =>
          country.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      )
    );

  }

  const showCountry = ()=>
  {
    if(countriesFilter.length===0) return
   
   if(countriesFilter.length ===1) return <Single data = {countriesFilter[0]}/>
   return countriesFilter.map(country=> <p>{country.name}</p>)
  }
  console.log(country.length)
      return (
      <div>
      <div>
         find countries <input onChange = {handleChange}  value = {country}/>
      </div>
      {countriesFilter.length>10 && <p> too many searches</p>}
      { countriesFilter.length<10 && showCountry()}
      
      </div>
    )
}




export default App;
