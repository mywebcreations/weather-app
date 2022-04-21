import { CurrentWeatherComponent } from './current-weather.component';

describe('CurrentWeather', () => {
  let currentWeatherComponent: CurrentWeatherComponent,
   mockGeolocationService, mockWeatherService;
  
  beforeEach(() => {
    mockGeolocationService = jasmine.createSpyObj('mockGeolocationService', [
      'getCurrentLocation', 'getCurrentLocationContinuous', 'handleError'
    ]);
    mockWeatherService = jasmine.createSpyObj('mockWeatherService', [
      'getWeatherByCity', 'getWeatherByCoordinates'
    ])

    currentWeatherComponent = new CurrentWeatherComponent(
      mockGeolocationService, mockWeatherService
    );
  })

  it('has currWeather property defined', () => {
    expect(currentWeatherComponent.currWeather).toBeUndefined();
  })





})