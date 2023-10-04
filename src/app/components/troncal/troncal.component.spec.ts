import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroncalComponent } from './troncal.component';

describe('TroncalComponent', () => {
  let component: TroncalComponent;
  let fixture: ComponentFixture<TroncalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TroncalComponent]
    });
    fixture = TestBed.createComponent(TroncalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
