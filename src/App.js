import axios   from "axios"
import {useState}from'react'
 import cloud from "./images/cloud.png"
 import mist1 from "./images/mist 1.jpg"
 import fog from "./images/fog.jpg"
 import haze from "./images/haze.svg"
 import rain from "./images/rain.png"
 import clear from "./images/clear.png"
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
 import'./style.css'
 function Ajith()
  { 
    const[info,setInfo]=useState("")
    const[city,setCity]=useState("")
  const updatecity=(event)=>{

    event.preventDefault();
    
  setCity(event.target.value)
  
  };
  const findreport=(e)=>{
    var myurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1fd4726b5ff18e137d4d59819528c28a`

  
    
  
  

  if(city!==null)
  {
      
    axios.get(myurl).then((response)=>{

      setInfo(response.data)
      
    }).catch((err)=>{
      setInfo(err.response.data)
    
    })
  }
}
return(
  <center>
    
        
  <div id="ak1"><h1>WEATHER FORECAST</h1>
  
   <div className="search-container">
  <div id="search">Enter City Name: <input type="text" value={city} className="search-box" placeholder="Search..." onChange={(e)=>updatecity(e)} ></input>
 
  <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} /></div></div>
    
 </div>
 <input type="button"  className="find_report" onClick={(e)=>findreport(e)} value="WeatherReport"></input>
 {
    (info!==null&& info.cod===200 &&
    <table>
  <tr><th colSpan={2}>Welcome To {info.name}</th></tr>
      <tr><th colSpan={2}> Weather Report</th></tr>
    <tr><td>Country</td><td>{info.sys.country}</td></tr>
    <tr><td>City Name</td><td>{info.name}</td></tr>
    <tr><td>Weather Report</td><td>{info.weather[0].main}</td></tr>
    <tr><td>Temperature</td><td>{(info.main.temp-273.15).toFixed(2)}°C</td></tr>
    <tr><td>Pressure</td><td>{info.main.pressure}hpa</td></tr>
    <tr><td>Humidity</td><td>{info.main.humidity}%</td></tr>
    <tr><td>Wind Speed</td><td>{info.wind.speed}m/s</td></tr>
    <tr><td>Latitude</td><td>{info.coord.lon}</td></tr>
    <tr><td>Longitude</td><td>{info.coord.lat}</td></tr>
    
    </table>)
    }
    
    {(info!=null && info.cod==="404" &&<table><tr> <th> {info.message}</th></tr></table>)}
   
  
  
  
  




 { info!==null&& info.cod===200 &&((info.weather[0].main==="Clouds"&&<img id="clouds"src={cloud} alt="path not found" ></img> )||
(info.weather[0].main==="Mist"&&<img id="clouds"src={mist1} alt="path not found"></img>)
 ||(info.weather[0].main==="Fog"&&<img id="clouds"src={fog} alt="path not found"></img>)
 ||(info.weather[0].main==="Haze"&&<img id="clouds"src={haze} alt="path not found"></img>)
  
 ||(info.weather[0].main==="Rain"&&<img id="clouds"src={rain} alt="path not found"></img>)
 ||(info.weather[0].main==="Clear"&&<img id="clouds"src={clear} alt="path not found"></img>))}
  { info!==null&& info.cod===200 && <div className="weather">{info.weather[0].main}</div>}
  { info!==null&& info.cod===200 && 
  <div className="all">
    <div className="temperature">Temperature</div>
  <div className="circle-wrap">
    <div className="circle">
      <div className="mask full-1">
        <div className="fill-1"></div>
      </div>
      <div className="mask half">
        <div className="fill-1"></div>
      </div>
      <div className="inside-circle">{(info.main.temp-273.15).toFixed(2)}°C </div>
      
    </div>
  </div>
  <div className="pressure">Pressure</div>
    <div className="circle-wrap">
      <div className="circle">
        <div className="mask full-2">
          <div className="fill-2"></div>
        </div>
        <div className="mask half">
          <div className="fill-2"></div>
        </div>
        <div className="inside-circle"> {info.main.pressure}hPa </div>
      </div>
    </div>
    <div className="windspeed">Wind Speed</div>
      <div className="circle-wrap">
        <div className="circle">
          <div className="mask full-3">
            <div className="fill-3"></div>
          </div>
          <div className="mask half">
            <div className="fill-3"></div>
          </div>
          <div className="inside-circle"> {info.wind.speed}m/s </div>
        </div>
      </div>
    </div>}
  
  </center>
  )
}
 export default Ajith
// import React from 'react';
// import './App.css';
// import Header from './Components/Header'
// import  Home  from './Components/Home'
// import About from './Components/About'
// import Project from './Components/Project'
// import Contact from './Components/Contact'
// import Skill from "./Components/Skill"
// import "./Home.css"
//  import "./About.css"
// import "./Skill.css"
// import  "./Project.css"
// import "./Contact.css"

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <Home />
//       <About />
//       <Skill/>
//       <Project />
//       <Contact />
//     </div>
//   );
// }

// export default App;

