import React from 'react'
import "./WeatherReport.css"
const WeatherReport = ({weatherData}) => {
  return (
    <>
    <div >
        <div className="container">
        Temp: {weatherData.temp} °C
    </div>
    <div className="container">
        <b>{weatherData.description}</b>
    </div>
    </div>
    </>
  )
}

export default WeatherReport
