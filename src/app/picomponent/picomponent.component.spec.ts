import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicomponentComponent } from './picomponent.component';

describe('PicomponentComponent', () => {
  let component: PicomponentComponent;
  let fixture: ComponentFixture<PicomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
