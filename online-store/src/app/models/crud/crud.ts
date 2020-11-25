import { Observable } from "rxjs";

export interface Crud<I, O> {
    
    get(): Observable<Array<O>>;

    getById(id: number): Observable<O>;

    create(request: I): Observable<O>;

    update(id: number, request: I): Observable<O>;

    delete(id: number): Observable<void>;   
}