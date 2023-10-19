import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { SuperheroesService } from 'src/app/services/superhero/superheroes.service';

@Component({
  selector: 'app-create-superhero',
  templateUrl: './create-superhero.component.html',
  styleUrls: ['./create-superhero.component.scss']
})
export class CreateSuperheroComponent {
  heroForm: FormGroup;

  constructor(
    private superheroesService: SuperheroesService,
    private formBuilder: FormBuilder
  ) {
    // Initialize the heroForm with form controls and validators
    this.heroForm = this.formBuilder.group({
      name: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      place: ['', Validators.required]
    });
  }

  onSubmit() {
    // Check if the form is valid
    if (this.heroForm.valid) {
      // If the form is valid, send the form data to the super hero service to create the superhero
      this.superheroesService.createHero(this.heroForm.value)
        .subscribe((newHero) => {
          // console.log('Superhero created:', newHero);
          this.heroForm.reset(); // Reset the form
        });
    } else {
      // If the form is not valid, mark all fields as touched to trigger error messages
      this.markFormGroupTouched(this.heroForm);
    }
  }

  // Helper function to mark all form controls as touched
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
