import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureUseComponent } from './future-use.component';

describe('FutureUseComponent', () => {
  let component: FutureUseComponent;
  let fixture: ComponentFixture<FutureUseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FutureUseComponent]
    });
    fixture = TestBed.createComponent(FutureUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
