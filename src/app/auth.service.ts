import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { studentModal } from './table';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'http://localhost:3000';
  constructor(private http: HttpClient, private router: Router) { }

  addform(data) {
    console.log(data)
    return this.http.post(`${this.uri}/addform`, data)
  }

  getdata(): Observable<studentModal[]> {
    return this
           .http
           .get<studentModal[]>(`${this.uri}/getdata`);
  }

  updatedata(data) {
    console.log(data)
    return this.http.post(`${this.uri}/updatedata/${data._id}`, data)
  }

  delete(data) {
    console.log(data._id)
    return this.http.get(`${this.uri}/deletedata/${data._id}`)
  }

}
