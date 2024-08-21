import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {

  constructor() { }

  url = 'https://dogapi.dog/api/v2/facts'

  getRandomCatFacts = () =>{
    return fetch(this.url)
  }
}
