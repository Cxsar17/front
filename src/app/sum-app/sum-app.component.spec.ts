import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumAppComponent } from './sum-app.component';

describe('SumAppComponent', () => {
  let component: SumAppComponent;
  let fixture: ComponentFixture<SumAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
