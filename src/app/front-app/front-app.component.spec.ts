import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontAppComponent } from './front-app.component';

describe('FrontAppComponent', () => {
  let component: FrontAppComponent;
  let fixture: ComponentFixture<FrontAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
