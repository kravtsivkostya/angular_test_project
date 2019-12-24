import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location) {
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=ea7691f4f6fe34f96d906a9f87cfb001&query=' + location + ',Ukraine'
      
    );
  }
}