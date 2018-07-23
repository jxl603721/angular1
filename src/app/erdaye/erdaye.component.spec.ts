import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErdayeComponent } from './erdaye.component';

describe('ErdayeComponent', () => {
  let component: ErdayeComponent;
  let fixture: ComponentFixture<ErdayeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErdayeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErdayeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
