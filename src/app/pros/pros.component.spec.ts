import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsComponent } from './pros.component';

describe('ProsComponent', () => {
  let component: ProsComponent;
  let fixture: ComponentFixture<ProsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProsComponent]
    });
    fixture = TestBed.createComponent(ProsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
