import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitTitleComponent } from './hit-title.component';

describe('HitTitleComponent', () => {
  let component: HitTitleComponent;
  let fixture: ComponentFixture<HitTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HitTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HitTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
