import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNiMeiComponent } from './about-ni-mei.component';

describe('AboutNiMeiComponent', () => {
  let component: AboutNiMeiComponent;
  let fixture: ComponentFixture<AboutNiMeiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutNiMeiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutNiMeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
