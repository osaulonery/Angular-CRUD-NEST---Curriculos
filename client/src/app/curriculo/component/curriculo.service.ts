import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Curriculo } from '../curriculo.model';

@Injectable({
  providedIn: 'root',
})
export class CurriculoService {
  baseUrl = 'http://localhost:3000/curriculo/';

  constructor(private snack: MatSnackBar, private http: HttpClient) {}

  mostraMsg(msg: string, isError: boolean = false): void {
    this.snack.open(msg, 'X', {
      duration: 1500,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  criaCurriculo(curriculo: Curriculo) {
    return this.http.post<Curriculo>(this.baseUrl, curriculo).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.mostraMsg('Erro!!!', true);
    return EMPTY;
  }

  lerCurriculo(): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  lerCurriculoPorId(id: number): Observable<Curriculo> {
    return this.http.get<Curriculo>(this.baseUrl + id).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  lerCurriculoPorCpf(cpf: string): Observable<Curriculo[]> {
    return this.http.get<Curriculo>(this.baseUrl + cpf).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  deletaCurriculo(id: string): Observable<Curriculo> {
    const url = `${this.baseUrl}${id}`;
    return this.http.delete<Curriculo>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
}
