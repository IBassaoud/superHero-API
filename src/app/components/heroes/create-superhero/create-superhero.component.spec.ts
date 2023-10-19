import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSuperheroComponent } from './create-superhero.component';

describe('CreateSuperheroComponent', () => {
  let component: CreateSuperheroComponent;
  let fixture: ComponentFixture<CreateSuperheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSuperheroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSuperheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
