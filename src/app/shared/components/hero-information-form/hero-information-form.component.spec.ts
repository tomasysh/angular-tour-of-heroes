import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInformationFormComponent } from './hero-information-form.component';

describe('HeroInformationFormComponent', () => {
  let component: HeroInformationFormComponent;
  let fixture: ComponentFixture<HeroInformationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroInformationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
