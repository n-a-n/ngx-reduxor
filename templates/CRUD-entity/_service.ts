import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class {{ properCase name }}Service {

  constructor(private http: HttpClient) { }

  load{{ titleCase name }}s(): Observable<any> {
    return this.http.get('https://api.com');
  }

  add{{ titleCase name }}(param: any): Observable<any> {
    return this.http.post('https://api.com', { body: param });
  }

  add{{ titleCase name }}s(param: any): Observable<any> {
    return this.http.post('https://api.com', { body: param });
  }

  update{{ titleCase name }}(param: any): Observable<any> {
    return this.http.patch('https://api.com', { body: param });
  }

  update{{ titleCase name }}s(param: any): Observable<any> {
    return this.http.patch('https://api.com', { body: param });
  }

  delete{{ titleCase name }}(param: any): Observable<any> {
    return this.http.delete('https://api.com');
  }

  delete{{ titleCase name }}s(param: any): Observable<any> {
    return this.http.delete('https://api.com');
  }

  clear{{ titleCase name }}s(param: any): Observable<any> {
    return;
  }

}
