import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PolyscriptService {

  constructor(private http:HttpClient) { }
  sendLogin(data: object){
    let URL = "http://localhost:5000/api/login"  
    return this.http.post(URL, data);
  }

  sendRegister(data: object){
    let URL = "http://localhost:5000/api/register"  
    return this.http.post(URL, data);
  }
}
