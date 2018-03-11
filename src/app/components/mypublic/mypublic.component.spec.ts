import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypublicComponent } from './mypublic.component';

describe('MypublicComponent', () => {
  let component: MypublicComponent;
  let fixture: ComponentFixture<MypublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
