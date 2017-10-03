/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomePostComponent } from './home-post.component';

describe('HomePostComponent', () => {
  let component: HomePostComponent;
  let fixture: ComponentFixture<HomePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
