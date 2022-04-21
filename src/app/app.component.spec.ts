import { AppComponent } from "./app.component";

describe('AppComponent', () => {
  let appComponent: AppComponent,
  mockSwUpdate, mockMatSnackBar;

  beforeEach(()=> {
    mockSwUpdate = jasmine.createSpyObj('mockSwUpdate', [
      'checkForUpdate', 'activateUpdate'
    ])
    mockMatSnackBar = jasmine.createSpyObj('mockMatSnackBar', [
      'open', 'dismiss', 'openFromTemplate', 'openFromComponent'
    ])
    appComponent = new AppComponent(mockSwUpdate, mockMatSnackBar)
  })

  it("has property title equals to 'weather-app'", () => {
    
    expect(appComponent.title).toEqual('weather-app')
  })

})