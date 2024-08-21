import { Component, Input, OnInit } from '@angular/core';
import { CatService } from './cat.service';
import { HttpClient } from '@angular/common/http';
import { get } from 'http';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.css'
})
export class CatComponent implements OnInit {

  @Input() btnName : String| undefined

  catUrl: Promise<any> | undefined;
  constructor(private catService: CatService, private http: HttpClient){}


  getRandomCatGIFs = () => {
    this.catUrl = this.catService.getRandomCatGIF().then(data => data.json()).then(data => data[0].url)
  }

  
  ngOnInit(): void {
    this.getRandomCatGIFs()
  }
}
