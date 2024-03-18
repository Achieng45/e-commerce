import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesTrendingComponent } from './categories-trending.component';

describe('CategoriesTrendingComponent', () => {
  let component: CategoriesTrendingComponent;
  let fixture: ComponentFixture<CategoriesTrendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesTrendingComponent]
    });
    fixture = TestBed.createComponent(CategoriesTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
