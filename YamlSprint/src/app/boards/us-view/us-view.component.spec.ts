import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsViewComponent } from './us-view.component';

describe('UsViewComponent', () => {
  let component: UsViewComponent;
  let fixture: ComponentFixture<UsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
