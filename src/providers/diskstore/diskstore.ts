import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseURL = "http://localhost/api"

/*
  Generated class for the DiskstoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DiskstoreProvider {

  constructor(public http: HttpClient) {
  }

  getDisks() {
    let url = baseURL + '/'
    return this.http.get(url);
  }

  getDisk(id: any) {
    let url = baseURL + 'disk/' + id
    return this.http.get(url);
  }

}
