import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor() {}

  url = 'https://api.thecatapi.com/v1/images/search'

  getRandomCatGIF = () =>{
    return fetch(this.url)
  }
}
