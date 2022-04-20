import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather: Weather | undefined;

  @Input() currWeda!: Boolean;
  @Output() currWedaSet = new EventEmitter<Boolean>();

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    
  }

  search(city: string): void {
    this.currWedaSet.emit(true); //communicate to app.component that it
      //should hide app-current-weather child component so that both
      //app-weather and app-current-weather do not display same time.

    this.weatherService.getWeatherByCity(city)
        .subscribe( (weather) => {
          this.weather = weather as Weather
        })    
  }

  hideAppCurrWeather() {
    this.currWedaSet.emit(false);
  }

}
