//import { DiskPage} from '';
import { DiskstoreProvider } from './../../providers/diskstore/diskstore';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DiskPage } from '../disk/disk';
import { NewdiskformPage } from '../newdiskform/newdiskform';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  disks = [];
  disk = [];
  A = [];
  B = [];
  deletedDisk ;

  constructor(
    public navCtrl: NavController, 
    private diskstoreProvider: DiskstoreProvider) {
    diskstoreProvider.getDisks().subscribe((result: any) => {
      this.disks = result;
      //console.log(result);
    })
  }

  getDisk(_id: any) {
    this.diskstoreProvider.getDisk(_id).subscribe((result: any) =>{
      this.disk = result;
      this.A = result.songs.A;
      this.B = result.songs.B;
      //console.log(result.songs.A);
      //console.log(result.songs.B);
      this.navCtrl.push(DiskPage, {
        "disk": this.disk, 
        "A": this.A, 
        "B": this.B
      });
    })
  } // fin del getDisk

  addDisk() {
    this.navCtrl.push(NewdiskformPage,{});
  }

  
}
