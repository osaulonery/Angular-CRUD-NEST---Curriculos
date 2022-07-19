import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CurriculoService {
  constructor(private snack: MatSnackBar, private http: HttpClient) {}

  mostraMsg(msg: string): void {
    this.snack.open(msg, 'X', {
      duration: 1500,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
