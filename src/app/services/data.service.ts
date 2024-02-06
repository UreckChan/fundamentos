import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

//Método que consume los datos en JSON de la API Fake
getPosts(){
  return this.http.get('https://jsonplaceholder.typicode.com/posts');
}

}
