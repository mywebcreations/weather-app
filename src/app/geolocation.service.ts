import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  coords: GeolocationCoordinates | undefined;
  _error: any;
  _position: Array<number> = [];

  constructor() { }

  getCurrentLocation() {
    if(!navigator.geolocation){
      alert('Geolocation is not supported by this browser!');
    }
    navigator.geolocation.getCurrentPosition( 
      (position) => {
        sessionStorage.setItem('lat', position.coords.latitude.toString(10));
        sessionStorage.setItem('lon', position.coords.longitude.toString(10));
      },
      (error) => {
        this.handleError(error)
      }
    )
  }

  getCurrentLocationContinuous() {
    if(!navigator.geolocation){
      alert('Geolocation is not supported by this browser!');
    }
    navigator.geolocation.getCurrentPosition( 
      (position) => {
        sessionStorage.setItem('lat', position.coords.latitude.toString(10));
        sessionStorage.setItem('lon', position.coords.longitude.toString(10));
      },
      (error) => {
        this.handleError(error)
      }
    )
  } 

  setPosition(lat: number, lon: number){
    this._position = [lat, lon];
  }

  getPosition(): Array<number>{
    return this._position
  }

  handleError(error: any){
    // console.log(error)
    switch(error.code) {
      case error.PERMISSION_DENIED:
        this._error = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        this._error = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        this._error = "The request to get user location timed out."
        break;
      default:
        this._error = "An unknown error occurred."
        break;
    }
  }
}
