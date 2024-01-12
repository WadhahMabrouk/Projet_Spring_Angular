import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectArticleToMemberComponent } from './affect-article-to-member.component';

describe('AffectArticleToMemberComponent', () => {
  let component: AffectArticleToMemberComponent;
  let fixture: ComponentFixture<AffectArticleToMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffectArticleToMemberComponent]
    });
    fixture = TestBed.createComponent(AffectArticleToMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
