import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullMemberComponent } from './full-member.component';

describe('FullMemberComponent', () => {
  let component: FullMemberComponent;
  let fixture: ComponentFixture<FullMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullMemberComponent]
    });
    fixture = TestBed.createComponent(FullMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
