import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyChangeComponent } from './party-change.component';

describe('PartyChangeComponent', () => {
  let component: PartyChangeComponent;
  let fixture: ComponentFixture<PartyChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
