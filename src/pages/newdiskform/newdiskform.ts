import { DiskstoreProvider } from './../../providers/diskstore/diskstore';

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';

/**
 * Generated class for the NewdiskformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newdiskform',
  templateUrl: 'newdiskform.html',
})
export class NewdiskformPage {

  diskForm: FormGroup;
  disk = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private diskstoreProvider: DiskstoreProvider) {
      this.diskForm = this.createDiskForm();
  }

  saveData() {
    this.diskstoreProvider.saveDisk(this.diskForm.value).subscribe((result: any) => {
      this.disk = result;
      //console.log(this.disk);
      this.navCtrl.push(ListPage,{})
    })
  }

  private createDiskForm() {
    return this.formBuilder.group({
      title: [''],
      genre: [''],
      artist: [''],
      publisher: [''],
      song1:[''],
      song2:[''],
      song3:[''],
      song4:[''],
      song5:[''],
      song6:[''],
      song7:[''],
      song8:[''],
      song9:[''],
      song10:[''],
      song11:[''],
      song12:[''],
      description:[''],
      image_url:['']
    });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad NewdiskformPage');
  }

}
