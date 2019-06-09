import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {
      this.diskForm = this.createDiskForm();
  }

  saveData() {
    console.log("fjaskdjflsakdjflkasdfj");
  }

  private createDiskForm() {
    return this.formBuilder.group({
      title: ['', Validators.required],
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NewdiskformPage');
  }

}
