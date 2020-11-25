import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crud } from '../../../models/crud/crud'


export abstract class CrudService<I, O> implements Crud<I, O> {

  protected jsonHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  protected constructor(protected url: string, protected http: HttpClient) { }

  get(): Observable<O[]> {
    return this.http.get<O[]>(this.url);
  }

  getById(id: number): Observable<O> {
    return this.http.get<O>(`${this.url}/${id}`)
  }

  create(request: I): Observable<O> {
    return this.http.post<O>(this.url, request, this.jsonHeader);
  }

  update(id: number, request: I): Observable<O> {
    return this.http.post<O>(`${this.url}/${id}`, request, this.jsonHeader);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`, this.jsonHeader);
  }
}
