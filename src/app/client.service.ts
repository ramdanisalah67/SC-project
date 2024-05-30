import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './Models/Client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  api = "http://localhost:8085/api/client/"
  constructor(private http:HttpClient) { }


  saveClient(myClient:Client):Observable<any>{
     return this.http.post(this.api+'add',myClient)
  }
  allClient():Observable<any>{
    return this.http.get(this.api+'allClient')
 }
}
