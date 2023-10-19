import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SuperheroesService } from 'src/app/services/superhero/superheroes.service';
import { Hero } from 'src/app/models/superhero.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-read-superhero',
  templateUrl: './read-superhero.component.html',
  styleUrls: ['./read-superhero.component.scss'],
})
export class ReadSuperheroComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'firstName',
    'lastName',
    'place',
    'edit',
    'delete',
  ];
  dataSource = new MatTableDataSource<Hero>();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private superHeroesService: SuperheroesService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.loadSuperheroes();
  }

  loadSuperheroes(): void {
    this.superHeroesService.getAllHeroes().subscribe((superheroes) => {
      this.dataSource.data = superheroes;
    });
  }

  confirmDelete(hero: Hero): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      data: hero,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && hero.id !== undefined) {
        this.deleteHero(hero.id);
      }
    });
  }

  deleteHero(id: number): void {
    if (id !== undefined) {
      // Check if id is defined
      this.superHeroesService.deleteHero(id).subscribe(
        () => {
          this.snackBar.open('Superhero deleted successfully', 'Close', {
            duration: 3000,
            panelClass: 'success-snackbar',
          });
          this.loadSuperheroes();
        },
        (error) => {
          this.snackBar.open('Error deleting superhero', 'Close', {
            duration: 3000,
            panelClass: 'error-snackbar',
          });
          console.error(error);
        }
      );
    }
  }
}
