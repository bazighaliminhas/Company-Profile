import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESyncMateComponent } from './e-sync-mate.component';

describe('ESyncMateComponent', () => {
  let component: ESyncMateComponent;
  let fixture: ComponentFixture<ESyncMateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ESyncMateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ESyncMateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
