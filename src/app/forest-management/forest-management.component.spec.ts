import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestManagementComponent } from './forest-management.component';

describe('ForestManagementComponent', () => {
  let component: ForestManagementComponent;
  let fixture: ComponentFixture<ForestManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForestManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForestManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
