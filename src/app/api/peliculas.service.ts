import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  public peliculas = new Subject<any>();

  constructor(private http : HttpClient) { 
  }

  public getPeliculas(){
    this.http.get<any[]>('/api/v1/peliculas')
        .subscribe(data => {
          this.peliculas.next(data);
        });
  }
}
