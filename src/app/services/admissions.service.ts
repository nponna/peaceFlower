import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AdmissionsService {
  constructor(private http: HttpClient) {}

  submitToGoogleSheets(data): Observable<any> {
  	console.log('data',data);
  	return this.http.post('https://script.google.com/macros/s/AKfycbzMGgPjWOQTstsqo3GAHPM130yYV4heoF0E17cUfn9JIrAxkRc/exec', data, {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
  })
  }
}