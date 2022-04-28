import { GeolocationService } from "./geolocation.service";

describe('GeolocationService', () => {
  let geolocationService: GeolocationService;
  let lat = sessionStorage.getItem('lat');
  let lon = sessionStorage.getItem('lon');
        
  beforeEach(() => {
    geolocationService = new GeolocationService();
    geolocationService.getCurrentLocationContinuous();
  });

  it('getCurrentLocation should create session storage', () => {
    expect(lat).toBeDefined();
    expect(lon).toBeDefined();
  })

  




})