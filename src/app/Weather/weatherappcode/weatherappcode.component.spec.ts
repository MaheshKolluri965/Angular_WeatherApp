import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherappcodeComponent } from './weatherappcode.component';

describe('WeatherappcodeComponent', () => {
  let component: WeatherappcodeComponent;
  let fixture: ComponentFixture<WeatherappcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherappcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherappcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
