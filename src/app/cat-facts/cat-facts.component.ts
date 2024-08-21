import { Component, Input, OnInit } from '@angular/core';
import { CatFactsService } from './cat-facts.service';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrl: './cat-facts.component.css'
})
export class CatFactsComponent implements OnInit {

  @Input() btnFactName : String| undefined

  catFacts: Promise<any> | undefined;
  constructor(private catFactService: CatFactsService, private http :HttpClient){}


  getRandomFacts = () => {
    this.catFacts = this.catFactService.getRandomCatFacts().then(data => data.json()).then(res => res.data[0].attributes.body)
    
  }

  ngOnInit(): void {
    this.getRandomFacts()
    // this.getUsingHttp()
  }
}
