import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather_model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) {}

    weatherApiURL:string='https://open-weather13.p.rapidapi.com/city';

    APIHostHeaderName:string = 'X-RapidAPI-Host';
    APIHostHeaderValue:string='open-weather13.p.rapidapi.com';

    APIKeyHeaderName:string='X-RapidAPI-Key';
    APIKeyHeaderValue:string='5635ef969amsh30d06da2f03c064p167df4jsn041f870107e8';

    getWeatherData(cityname:string):Observable<WeatherData>{
      return this.http.get<WeatherData>(`${environment.weatherApiURL}/${cityname}`,{
        headers:new HttpHeaders()
        .set(environment.APIKeyHeaderName,environment.APIKeyHeaderValue)
        .set(environment.APIHostHeaderName,environment.APIHostHeaderValue)
      })
    }
}
