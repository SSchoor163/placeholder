import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ITodo} from './itodo'

@Injectable({
  providedIn: 'root'
})
export class PalceholdService {
  constructor(private http:HttpClient) { }
  private _url: string = "https://jsonplaceholder.typicode.com/todos"
  
  getAll():Observable<ITodo[]>{
    return this.http.get<ITodo[]>(this._url);
  }
}
