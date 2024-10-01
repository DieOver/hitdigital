import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionComponent } from './introduction.component';
import { provideHttpClient } from '@angular/common/http';

describe('IntroductionComponent', () => {
  let component: IntroductionComponent;
  let fixture: ComponentFixture<IntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionComponent],
      providers: [
        provideHttpClient()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
