import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrontAppService {

  private apiUrl = 'http://192.168.1.66:30001/api/machine-info';

  constructor(private http: HttpClient) { }

  getMachineInfo() {
    return this.http.get(this.apiUrl);
  }
}
