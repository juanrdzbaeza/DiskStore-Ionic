import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiskPage } from './disk';

@NgModule({
  declarations: [
    DiskPage,
  ],
  imports: [
    IonicPageModule.forChild(DiskPage),
  ],
})
export class DiskPageModule {}
