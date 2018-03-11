import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournoteSubmitComponent } from './tournote-submit.component';

describe('TournoteSubmitComponent', () => {
  let component: TournoteSubmitComponent;
  let fixture: ComponentFixture<TournoteSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournoteSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournoteSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
