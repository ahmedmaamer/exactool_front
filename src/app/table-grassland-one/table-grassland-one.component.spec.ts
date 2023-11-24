import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGrasslandOneComponent } from './table-grassland-one.component';

describe('TableGrasslandOneComponent', () => {
  let component: TableGrasslandOneComponent;
  let fixture: ComponentFixture<TableGrasslandOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableGrasslandOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableGrasslandOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
