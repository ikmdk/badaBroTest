import { Injectable } from '@angular/core';
 
import { Http } from '@angular/http' 
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'
//import 'rxjs/Rx'
import {map} from 'rxjs/operators'; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: Http) { }
  public getMembers():Observable<any>{
    return this.http.get('./Members.json').pipe(map((res:any) => res.json()));
   }
}
