import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SuperheroesService } from 'src/app/services/superhero/superheroes.service';
import { Hero } from 'src/app/models/superhero.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-update-superhero',
  templateUrl: './update-superhero.component.html',
  styleUrls: ['./update-superhero.component.scss']
})
export class UpdateSuperheroComponent implements OnInit, OnDestroy {
  heroUpdateForm: FormGroup;
  superheroId: number | undefined;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private superheroesService: SuperheroesService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackbarService: SnackbarService
  ) {
    this.heroUpdateForm = this.formBuilder.group({
      name: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      place: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(params => {
        const id = +params['heroId'];
        if (!isNaN(id)) {
          this.superheroId = id;
          this.loadSuperheroData();
        } else {
          // Redirect to the base route 
          this.router.navigate(['']);
        }
      });
  }

  loadSuperheroData() {
    if (this.superheroId !== undefined) {
      this.superheroesService.getHero(this.superheroId)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((superhero) => {
          this.heroUpdateForm.patchValue(superhero);
        });
    }
  }

  onSubmit() {
    if (this.heroUpdateForm.valid && this.superheroId !== undefined) {
      this.superheroesService
        .updateHero(this.superheroId, this.heroUpdateForm.value)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(
          (updatedHero: Hero) => {
            this.router.navigate(['/heroes', updatedHero.id, 'edit']);
            this.snackbarService.showSuccess('Superhero updated successfully');
          },
          (error) => {
            console.error(error);
            this.snackbarService.showError('Error updating superhero');
          }
        );
    } else {
      this.markFormGroupTouched(this.heroUpdateForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
