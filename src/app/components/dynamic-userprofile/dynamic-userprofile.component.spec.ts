import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicUserprofileComponent } from './dynamic-userprofile.component';

describe('DynamicUserprofileComponent', () => {
  let component: DynamicUserprofileComponent;
  let fixture: ComponentFixture<DynamicUserprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicUserprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicUserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
