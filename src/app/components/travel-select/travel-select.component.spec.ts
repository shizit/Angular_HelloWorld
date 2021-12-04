import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelSelectComponent } from './travel-select.component';

describe('TravelSelectComponent', () => {
  let component: TravelSelectComponent;
  let fixture: ComponentFixture<TravelSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
