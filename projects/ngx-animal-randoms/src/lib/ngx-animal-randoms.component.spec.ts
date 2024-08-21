import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAnimalRandomsComponent } from './ngx-animal-randoms.component';

describe('NgxAnimalRandomsComponent', () => {
  let component: NgxAnimalRandomsComponent;
  let fixture: ComponentFixture<NgxAnimalRandomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxAnimalRandomsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxAnimalRandomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
