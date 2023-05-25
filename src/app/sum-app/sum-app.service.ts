import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SumAppService {

  private apiUrl = 'http://10.4.73.149:30001/information';

  constructor(private http: HttpClient) { }

  getMachineInfo() {
    return this.http.get(this.apiUrl);
  }
}
