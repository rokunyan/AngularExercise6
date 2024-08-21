import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-exer6';

  @Input() btnName: string = 'Random Cat Image'
  @Input() btnFactName: string = 'Random Dog Facts'
}
