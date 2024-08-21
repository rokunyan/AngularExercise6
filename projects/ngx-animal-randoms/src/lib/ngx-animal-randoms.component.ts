import { Component, Input } from '@angular/core';

@Component({
  selector: 'animal-ngx-animal-randoms',
  template: `
   <animal-cat-images btnName={{btnName}}></animal-cat-images><br/><br/>
   <animal-dog-facts btnFactName={{btnFactName}}></animal-dog-facts>
  `,
  styles: ``
})
export class NgxAnimalRandomsComponent {
  @Input() btnName: string = 'Random Cat Image'
  @Input() btnFactName: string = 'Random Dog Facts'
}
