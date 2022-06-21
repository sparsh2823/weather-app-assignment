import React , {useContext} from 'react'
import  {GlobalInfo} from "../../App";
import "./CityList.css";



const CityList = () => {

  const {listOfCities,setListOfCities,fetchWeatherReport} = useContext(GlobalInfo);

  const deleteCity=(id)=>{
     const updatedCityList = listOfCities.filter((city,iid)=>{
        return id !== iid
     })

     setListOfCities(updatedCityList)
  }

   
  return (
    <div>
      <div className="header-city-name">No. Name</div>
     {listOfCities.map((city,id)=>{
        return(
          <div key ={id} className="city-description">
            <div onClick={()=>fetchWeatherReport(city)} >{id+1} {city}</div>
            <div onClick={()=>deleteCity(id)}>delete</div>
           
          </div>
        )
        
     })}
       
       
    </div>
     
  )
}

export default CityList
