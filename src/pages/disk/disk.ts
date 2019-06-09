
import { DiskstoreProvider } from './../../providers/diskstore/diskstore';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';

/**
 * Generated class for the DiskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disk',
  templateUrl: 'disk.html',
})
export class DiskPage {
  disk: any;
  A: any;
  B: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private diskstoreProvider: DiskstoreProvider) {
      this.disk = this.navParams.get("disk");
      this.A = this.navParams.get("A");
      this.B = this.navParams.get("B");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiskPage');
  }

  deleteDisk(_id: any){
    console.log("alkdsfjsadhflashdfjhasdjklfh");
    this.diskstoreProvider.delDisk(_id).subscribe((result: any) =>{
      this.deleteDisk = result;
      this.navCtrl.push(ListPage,{})
    })
  }
}
