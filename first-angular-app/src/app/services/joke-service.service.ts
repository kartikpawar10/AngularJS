import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeServiceService {

  // API CALL OR NETWORK SHOULD ALWAYS IN SERVICES
  // DI --> HttpClient
  // Constructor mein DI inject krte hai

  constructor(private http:HttpClient) {}

  // private http = inject(HttpClient) Works Also (When you don't have class like you also don't have a class here either)
  getJoke(){
    return this.http.get("https://api.chucknorris.io/jokes/random?category=dev")
  }

}
