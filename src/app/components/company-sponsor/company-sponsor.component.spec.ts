import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySponsorComponent } from './company-sponsor.component';

describe('CompanySponsorComponent', () => {
  let component: CompanySponsorComponent;
  let fixture: ComponentFixture<CompanySponsorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySponsorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
