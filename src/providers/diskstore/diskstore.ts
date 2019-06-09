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

  getDisk(_id: any) {
    let url = baseURL + '/disk/' + _id
    return this.http.get(url);
  }

  delDisk(_id: any) {
    let url = baseURL + '/disk/' + _id
    return this.http.delete(url);
  }

  saveDisk(disk: any) {
    let url = baseURL + '/disk'
    return this.http.post(url, disk);
  }

}
