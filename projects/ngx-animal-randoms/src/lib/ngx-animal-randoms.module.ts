import { NgModule } from '@angular/core';
import { NgxAnimalRandomsComponent } from './ngx-animal-randoms.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CatImagesComponent } from "./cat-images/cat-images.component";
import { DogFactsComponent } from "./dog-facts/dog-facts.component";


@NgModule({
  declarations: [
    NgxAnimalRandomsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CatImagesComponent,
    DogFactsComponent
],
  exports: [
    NgxAnimalRandomsComponent
  ]
})
export class NgxAnimalRandomsModule { }
