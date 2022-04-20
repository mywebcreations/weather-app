import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Weather } from './weather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService implements OnInit {

  city: string | undefined;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  getWeatherByCity(city: string) : Observable<Weather> {
    const options = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appId', environment.apiKey);

    return this.http.get<Weather>(`${environment.apiUrl}`, {params: options} );
  }

  getWeatherByCoordinates(lat: number, lon: number): Observable<Weather> {
    const options = new HttpParams()
      .set('units', 'metric')
      .set('lat', lat)
      .set('lon', lon)
      .set('appId', environment.apiKey)

    return this.http.get<Weather>(`${environment.apiUrl}`, {params:options});
  }
}
