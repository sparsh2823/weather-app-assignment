
import './App.css';
import Header from "./Components/Header/Header";
import Modal from "./Components/Modal/Modal";
import CityList from "./Components/CityList/CityList"
import {useState , createContext} from "react";
import axios from "axios";
import WeatherReport from './Page/WeatherReport';
// import { Routes, Route } from "react-router-dom";



export const GlobalInfo = createContext();

function App() {

  const [openModal,setOpenModal] = useState(false);
  const [inputValue,setInputValue] = useState("");
  const [listOfCities,setListOfCities] = useState([]);
  const [weatherData, setWeatherData] = useState({
        description: "",
        temp: "",
        temp_max: "",
        temp_min: "",
        humidity: "",
        sunrise: "",
        sunset: "",
        country: "",
    })

   const fetchWeatherReport=(city)=>{

         axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a035415c04a07118338b51b17a27ff9b`)
        .then((response)=>{
           setWeatherData({
                    description: response.data.weather[0].description,
                    temp: response.data.main.temp - 273,
                    temp_max: response.data.main.temp_max,
                    temp_min: response.data.main.temp_min,
                    humidity: response.data.main.humidity,
                    sunrise: response.data.sys.sunrise,
                    sunset: response.data.sys.sunset,
                    country: response.data.sys.country,
                    
                })
        })
  }




  return (
    <>
    
    <GlobalInfo.Provider
     value ={{inputValue,setInputValue,listOfCities,setListOfCities,weatherData,setWeatherData,fetchWeatherReport}}>
    
    <div className="App">

    
    <Header onOpenModal={setOpenModal}/>
    {openModal && <Modal onCloseModal={setOpenModal}/>}
    <CityList/>
    <WeatherReport weatherData={weatherData}/>
    </div>
    
    </GlobalInfo.Provider>
    
    
    
    </>
  );
}

export default App;
