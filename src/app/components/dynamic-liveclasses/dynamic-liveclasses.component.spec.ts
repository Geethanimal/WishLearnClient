import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLiveclassesComponent } from './dynamic-liveclasses.component';

describe('DynamicLiveclassesComponent', () => {
  let component: DynamicLiveclassesComponent;
  let fixture: ComponentFixture<DynamicLiveclassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicLiveclassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicLiveclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
