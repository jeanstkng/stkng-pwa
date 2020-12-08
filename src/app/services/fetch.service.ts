import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke } from '../models/joke';
import { CatsPhoto } from '../models/cats-photo';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }

  /**
   * Randomly returns daddy jokes from: https://icanhazdadjoke.com
   */
  getJoke() {
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Joke>('https://icanhazdadjoke.com', { headers });
  }

  /**
   * Returns random cats photos
   */
  getCats() {
    return this.http.get<CatsPhoto>('https://api.thecatapi.com/v1/images/search');
  }

}
