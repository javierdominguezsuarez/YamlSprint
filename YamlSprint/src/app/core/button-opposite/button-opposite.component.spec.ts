import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOppositeComponent } from './button-opposite.component';

describe('ButtonOppositeComponent', () => {
  let component: ButtonOppositeComponent;
  let fixture: ComponentFixture<ButtonOppositeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonOppositeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonOppositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
