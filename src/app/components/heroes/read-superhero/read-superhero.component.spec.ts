import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadSuperheroComponent } from './read-superhero.component';

describe('ReadSuperheroComponent', () => {
  let component: ReadSuperheroComponent;
  let fixture: ComponentFixture<ReadSuperheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadSuperheroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadSuperheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
