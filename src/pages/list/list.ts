//import { DiskPage} from '';
import { DiskstoreProvider } from './../../providers/diskstore/diskstore';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  disks = [];
  disk = [];


  constructor(
    public navCtrl: NavController, 
    private diskstoreProvider: DiskstoreProvider) {
    diskstoreProvider.getDisks().subscribe((result: any) => {
      this.disks = result;
      console.log(result);
    })
  }

  getDisk(id: any) {
    this.diskstoreProvider.getDisk(id).subscribe((result: any) =>{
      this.disk = result;
      console.log(result);
    })
  }
}
