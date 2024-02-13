import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterwoodComponent } from './interwood.component';

describe('InterwoodComponent', () => {
  let component: InterwoodComponent;
  let fixture: ComponentFixture<InterwoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterwoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterwoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
