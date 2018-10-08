import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessCodeComponent } from './mess-code.component';

describe('MessCodeComponent', () => {
  let component: MessCodeComponent;
  let fixture: ComponentFixture<MessCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
