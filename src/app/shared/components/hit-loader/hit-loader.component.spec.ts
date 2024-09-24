import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitLoaderComponent } from './hit-loader.component';

describe('HitLoaderComponent', () => {
  let component: HitLoaderComponent;
  let fixture: ComponentFixture<HitLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HitLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HitLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
