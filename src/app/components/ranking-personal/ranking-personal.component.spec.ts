import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingPersonalComponent } from './ranking-personal.component';

describe('RankingPersonalComponent', () => {
  let component: RankingPersonalComponent;
  let fixture: ComponentFixture<RankingPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
