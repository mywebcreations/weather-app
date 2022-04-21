import { WeatherComponent } from "./weather.component";

describe('WeatherComponent', () => {
  let weatherComponent: WeatherComponent,
   mockWeatherService;

  beforeEach(() => {
    mockWeatherService = jasmine.createSpyObj('mockWeatherService', [
      'getWeatherByCity', 'getWeatherByCoordinates'
    ]);
    weatherComponent = new WeatherComponent(mockWeatherService);
  })

  it('initial currWeda property is false', () => {
    //let type = typeof weatherComponent.currWeda;
    //expect(type === 'boolean' ).toBeTrue();
    expect(weatherComponent.currWeda).toBeFalsy();
  })









})