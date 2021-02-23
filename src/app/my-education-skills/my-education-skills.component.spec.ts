import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEducationSkillsComponent } from './my-education-skills.component';

describe('MyEducatonSkillsComponent', () => {
  let component: MyEducationSkillsComponent;
  let fixture: ComponentFixture<MyEducationSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyEducationSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEducationSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
