import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { GeolocationService } from '../geolocation.service';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  currWeather: Weather | undefined;
  coords: GeolocationCoordinates | undefined
  lat: number = 0;
  lon: number = 0;
  
  constructor(
    private geolocationService: GeolocationService, 
    private weatherService: WeatherService 
  ) { }

  ngOnInit(): void {
    this.geolocationService.getCurrentLocationContinuous();
    this.lat = Number(sessionStorage.getItem('lat'));
    this.lon = Number(sessionStorage.getItem('lon'));
    this.getWeather(this.lat, this.lon);
    
  }

  getWeather(lat: number, lon: number) {
    this.weatherService.getWeatherByCoordinates(lat, lon)
        .subscribe(response => this.currWeather = response as Weather)
  }

}
