import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodOptionComponent } from './food-option.component';

describe('FoodOptionComponent', () => {
  let component: FoodOptionComponent;
  let fixture: ComponentFixture<FoodOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
