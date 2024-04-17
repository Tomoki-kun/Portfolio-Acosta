import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from '../model/educacion';
import { Observable } from 'rxjs';
import { Environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = Environment.URL + 'educacion/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.URL + `detail/${id}`);
  }

  public save(educacion:Educacion): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create',educacion);
  }

  public update(id: number,educacion:Educacion): Observable<any>
  {
    return this.httpClient.put<any>(this.URL + `update/${id}`,educacion);
  }

  public delete(id:number): Observable<any>
  {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}