import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOtherLandUseComponent } from './table-other-land-use.component';

describe('TableOtherLandUseComponent', () => {
  let component: TableOtherLandUseComponent;
  let fixture: ComponentFixture<TableOtherLandUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOtherLandUseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableOtherLandUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
