import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrasslandAndLivestockComponent } from './grassland-and-livestock.component';

describe('GrasslandAndLivestockComponent', () => {
  let component: GrasslandAndLivestockComponent;
  let fixture: ComponentFixture<GrasslandAndLivestockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrasslandAndLivestockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrasslandAndLivestockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
