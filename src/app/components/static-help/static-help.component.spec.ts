import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticHelpComponent } from './static-help.component';

describe('StaticHelpComponent', () => {
  let component: StaticHelpComponent;
  let fixture: ComponentFixture<StaticHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
