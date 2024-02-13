import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizMateComponent } from './biz-mate.component';

describe('BizMateComponent', () => {
  let component: BizMateComponent;
  let fixture: ComponentFixture<BizMateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BizMateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BizMateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
