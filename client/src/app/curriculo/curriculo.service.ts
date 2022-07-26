import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Curriculo } from './curriculo.model';

@Injectable({
  providedIn: 'root',
})
export class CurriculoService {
  baseUrl = 'http://localhost:3000/curriculo/';
  curriculo: Curriculo;

  constructor(private snack: MatSnackBar, private http: HttpClient) {}

  mostraMsg(msg: string, isError: boolean = false): void {
    this.snack.open(msg, 'X', {
      duration: 1500,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  errorHandler(e: any): Observable<any> {
    this.mostraMsg('Erro!!!', true);
    return EMPTY;
  }

  criaCurriculo(curriculo: Curriculo) {
    return this.http.post<Curriculo>(this.baseUrl, curriculo).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
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

  editaCurriculo(curriculo: Curriculo): Observable<Curriculo> {
    const url = `${this.baseUrl}${curriculo.id}`;
    return this.http.put<Curriculo>(url, curriculo).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  deletaCurriculo(id: number): Observable<Curriculo> {
    const url = `${this.baseUrl}${id}`;
    return this.http.delete<Curriculo>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  escolaridade(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'escolaridade').pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  status(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'status').pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
}
