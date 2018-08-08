import axios from 'axios' 

const API_KEY = 'e4d7db69bb65ab1810b8be57fa6f95aa'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?`

export const FETCH_WEATHER = 'FETCH_WEATHER' 

export function fetchWeather(city) {
  const url = `${ROOT_URL}q=${city},us&appid=${API_KEY}` 
  const request = axios.get(url) 

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}