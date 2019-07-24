import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonCardComponent } from './ion-card.component';

describe('IonCardComponent', () => {
  let component: IonCardComponent;
  let fixture: ComponentFixture<IonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonCardComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
