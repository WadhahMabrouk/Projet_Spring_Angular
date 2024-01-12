import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectToolToMemberComponent } from './affect-tool-to-member.component';

describe('AffectToolToMemberComponent', () => {
  let component: AffectToolToMemberComponent;
  let fixture: ComponentFixture<AffectToolToMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffectToolToMemberComponent]
    });
    fixture = TestBed.createComponent(AffectToolToMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
