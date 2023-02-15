import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticAboutusComponent } from './static-aboutus.component';

describe('StaticAboutusComponent', () => {
  let component: StaticAboutusComponent;
  let fixture: ComponentFixture<StaticAboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticAboutusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
