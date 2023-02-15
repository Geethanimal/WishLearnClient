import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicWallComponent } from './dynamic-wall.component';

describe('DynamicWallComponent', () => {
  let component: DynamicWallComponent;
  let fixture: ComponentFixture<DynamicWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicWallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
