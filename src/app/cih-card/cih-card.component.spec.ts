import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CihCardComponent } from './cih-card.component';

describe('CihCardComponent', () => {
  let component: CihCardComponent;
  let fixture: ComponentFixture<CihCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CihCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CihCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
