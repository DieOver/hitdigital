import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitCardComponent } from './hit-card.component';

describe('HitCardComponent', () => {
  let component: HitCardComponent;
  let fixture: ComponentFixture<HitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HitCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
