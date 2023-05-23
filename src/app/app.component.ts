import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  weatherData?:WeatherData;

  ngOnInit(): void {
    this.weatherService.getWeatherData('bhopal')
    .subscribe({
      next:(response)=>{
        this.weatherData =response
        console.log(response);
      }
    })
  }
}
