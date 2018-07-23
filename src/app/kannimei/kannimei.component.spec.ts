import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KannimeiComponent } from './kannimei.component';

describe('KannimeiComponent', () => {
  let component: KannimeiComponent;
  let fixture: ComponentFixture<KannimeiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KannimeiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KannimeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
