import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TestService {

  constructor(public http:HttpClient) { }

  /**
   * getUsuarios
   */
  public getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
