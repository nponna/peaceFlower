import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AdmissionsService {
  constructor(private http: HttpClient) {}

  submitToGoogleSheets(data): Observable<any> {
  	// console.log('data',data);

  	let encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&');
    
    // console.log('encoded',encoded);
  	return this.http.post('https://script.google.com/macros/s/AKfycbzMGgPjWOQTstsqo3GAHPM130yYV4heoF0E17cUfn9JIrAxkRc/exec', encoded, {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
  })
  }
}