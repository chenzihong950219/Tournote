import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournoteDetailComponent } from './tournote-detail.component';

describe('TournoteDetailComponent', () => {
  let component: TournoteDetailComponent;
  let fixture: ComponentFixture<TournoteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournoteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournoteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
