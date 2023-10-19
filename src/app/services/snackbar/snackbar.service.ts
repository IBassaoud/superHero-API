import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  showSuccess(message: string, duration: number = 3000): void {
    this.showSnackbar(message, 'success-snackbar', duration);
  }

  showError(message: string, duration: number = 3000): void {
    this.showSnackbar(message, 'error-snackbar', duration);
  }

  private showSnackbar(message: string, panelClass: string, duration: number): void {
    const config: MatSnackBarConfig = {
      duration: duration,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: [panelClass],
    };

    this.snackBar.open(message, 'Close', config);
  }
}
