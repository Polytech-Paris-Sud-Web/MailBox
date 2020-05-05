import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationEmailComponent } from './creation-email.component';

describe('CreationEmailComponent', () => {
  let component: CreationEmailComponent;
  let fixture: ComponentFixture<CreationEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
