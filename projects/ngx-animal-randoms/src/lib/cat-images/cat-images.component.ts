import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'animal-cat-images',
  standalone: true,
  imports: [CommonModule, BrowserModule],
  templateUrl: './cat-images.component.html',
  styleUrl: './cat-images.component.css'
})
export class CatImagesComponent implements OnInit {

  serviceUrl = "https://api.thecatapi.com/v1/images/search"
  @Input() btnName : string = 'Random Cat Images'

  catUrl: Promise<any> | undefined;

  getRandomCatGIFs = () => {
    this.catUrl = fetch(this.serviceUrl).then(data => data.json()).then(data => data[0].url)
  }

  ngOnInit(): void {
    this.getRandomCatGIFs()
  }
}
