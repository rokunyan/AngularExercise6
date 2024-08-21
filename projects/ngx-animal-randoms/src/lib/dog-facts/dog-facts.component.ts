import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'animal-dog-facts',
  standalone: true,
  imports: [CommonModule, BrowserModule],
  templateUrl: './dog-facts.component.html',
  styleUrl: './dog-facts.component.css'
})
export class DogFactsComponent implements OnInit {

  serviceUrl= "https://dogapi.dog/api/v2/facts"

  @Input() btnFactName : String = 'Random Dog Facts'

  dogFacts: Promise<any> | undefined;
  
  getRandomFacts = () => {
    this.dogFacts = fetch(this.serviceUrl).then(data => data.json()).then(res => res.data[0].attributes.body)
    
  }

  ngOnInit(): void {
    this.getRandomFacts()
  }
}
