import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsFormComponent } from './us-form.component';

describe('UsFormComponent', () => {
  let component: UsFormComponent;
  let fixture: ComponentFixture<UsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
