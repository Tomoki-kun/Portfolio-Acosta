import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { Environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = Environment.URL + 'personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona> {
    return this.http.get<persona>(this.URL+'traer/perfil');
  }
}
