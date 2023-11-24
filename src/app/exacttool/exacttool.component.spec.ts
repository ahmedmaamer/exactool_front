import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExacttoolComponent } from './exacttool.component';

describe('ExacttoolComponent', () => {
  let component: ExacttoolComponent;
  let fixture: ComponentFixture<ExacttoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExacttoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExacttoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
