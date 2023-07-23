import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _weatherService: WeatherService){ }

  city: string = "Bangalore";  // declaring as undefined

  weatherDetails?: WeatherData;
  
  ngOnInit(): void {
    this.getWeatherData(this.city);
  }

  onSubmit(){
    this.getWeatherData(this.city);
    this.city="";
  }

  private getWeatherData(city: string){
    this._weatherService.getWeatherData(city).subscribe({
      next: (response) => {
        console.log(response),
        this.weatherDetails = response
      },    
      error: (e) => console.log(e)
    });
  }

  title = 'WeatherApp';
}
