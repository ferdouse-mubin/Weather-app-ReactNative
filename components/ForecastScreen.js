import Header from './Header'
import ForecastListItem from './ForecastListItem';
import {View, Button, StyleSheet, Text, FlatList} from 'react-native';
import {useState, useEffect} from 'react';
const ForecastScreen = ()=>{

const [weatherForeCast, setWeatherForcast] = useState({city:{name: "Fetching"}});
useEffect(()=>{
fetchWeatherForecast("pori");
}, []);

const url = 'https://api.openweathermap.org/data/2.5/forecast?q=';
 const apiKey = '&units=metric&appid=372f58cdd4578e431749980646541770'
 //const iconImage = 'https://openweathermap.org/image/w/';
 const fetchWeatherForecast = async (location)=>{
  try{
    const response = await fetch(url + location + apiKey);
    const weatherObject = await response.json();
    setWeatherForcast(weatherObject);
  }
  catch(err){
      console.error(error);
  }
};
  return(

    <View>
    <Header headerText ={weatherForeCast.city.name}></Header>
    <FlatList showsHorizontalScrollIndicator={false} 
     data={weatherForeCast.list}
     renderItem={ ({item})=>
       <ForecastListItem
       time={item.dt_txt.substring(11)}
       temperature={item.main.temp}
       description={item.weather[0].description}
       windspeed={item.wind.speed}
       icon={item.weather[0].icon}
       ></ForecastListItem>
     }
    ></FlatList>
    </View>
  );
};
export default ForecastScreen;






