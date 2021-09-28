import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHeroPageComponent } from './edit-hero-page.component';

describe('EditHeroPageComponent', () => {
  let component: EditHeroPageComponent;
  let fixture: ComponentFixture<EditHeroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHeroPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHeroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
