import {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput, Image, SafeAreaView} from "react-native";
import Header from './Header'
import WeatherInfo from './WeatherInfo';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const WeatherScreen=({navigation})=>{

 // let helloMessage = "Helloe World";
 const[weatherData, setWeatherData]= useState({
   //location : '',
   city : 'Tampere',
   description: 'Sunny',
   temperature: 15,
   windSpeed: 3, 
   weatherIcon: "01d",
 });

 const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
 const apiKey = '&units=metric&appid=372f58cdd4578e431749980646541770'
 const fetchWeatherData = async (location)=>{
  try{
    const response = await fetch(url + location + apiKey);
    const jsonWeatherObject = await response.json();
    setWeatherData({
      city: jsonWeatherObject.name,
      description: jsonWeatherObject.weather[0].description,
      temperature: jsonWeatherObject.main.temp,
      windSpeed: jsonWeatherObject.wind.speed,
      weatherIcon: jsonWeatherObject.weather[0].icon,
    });
  }
  catch(err){
      console.error(error);
  }
};
const updateLocation = (updateLocation)=>{
fetchWeatherData(updateLocation);
}
const openForecastScreen =()=>
{
  console.log("Open forecast");
  navigation.navigate('Forecast');
}
  return(
    <SafeAreaView style={styles.container}>
     <Header headerText = {weatherData.city}></Header>
     <WeatherInfo description ={weatherData.description}
                  temperature = {weatherData.temperature}
                  windSpeed ={weatherData.windSpeed}
                  weatherIcon ={weatherData.weatherIcon}
     ></WeatherInfo>
  <Button title={"Update"} onPress={() => fetchWeatherData("pori")}></Button>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create(
  {container:{
    flex:1,
   },
   btn:{
    marginTop: 10,
   }
  }
);

export default WeatherScreen;