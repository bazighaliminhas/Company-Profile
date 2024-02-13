import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapPromiseComponent } from './snap-promise.component';

describe('SnapPromiseComponent', () => {
  let component: SnapPromiseComponent;
  let fixture: ComponentFixture<SnapPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnapPromiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnapPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
