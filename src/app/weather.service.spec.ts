import { WeatherService } from './weather.service';
import { Observable, of } from 'rxjs';
import { Weather } from './weather';

describe('WeatherService', () => {
  let weatherService: WeatherService,
    mockHttp: any;
  
  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', [
      'get', 'post', 'delete'
    ]);
    weatherService = new WeatherService(mockHttp);
  })

  it('getWeatherByCity returns Observable of type Weather for the city', () => {
    const weather: Weather = {
      "coord": {
        "lon": 50,
        "lat": 3
      },
      "weather": [
        {
          "id": 1,
          "main": 'test string',
          "description": 'test string',
          "icon": 'test string'
        }
      ],
      "base": 'test string',
      "main": {
        "temp": 111,
        "feels_like": 111,
        "temp_min": 111,
        "temp_max": 111,
        "pressure": 111,
        "humidity": 111
      },
      "visibility": 111,
      "wind": {
        "speed": 111,
        "deg": 111
      },
      "clouds": {
        "all": 111
      },
      "dt": 111,
      "sys": {
        "type": 111,
        "id": 111,
        "message": 111,
        "country": 'test string',
        "sunrise": 111,
        "sunset": 111
      },
      "timezone": 111,
      "id": 111,
      "name": 'test string',
      "cod": 111
    };

    mockHttp.get.and.returnValue(of(weather));
    const response = weatherService.getWeatherByCity('');
    response.subscribe(value => {
      expect(value).toBe(weather);
    })


  })






})
