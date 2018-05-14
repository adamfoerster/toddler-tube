import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/operators';

import { PasswordPage } from '../password/password';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  active = false;
  popoverShow = false;
  popover: any;
  timecode: number = 0;
  obsTimecode: any;

  constructor(public navCtrl: NavController, private pop: PopoverController) {
    this.obsTimecode = Observable.of
    this.timecode
  }

  activate() {
    if (this.active){
      console.log('calling popover');
      this.popover = this.pop.create(PasswordPage);
      this.popover.present();
      this.popover.onDidDismiss(_=>{
        this.popoverShow = false;
      });
      this.popoverShow = true;
      this.active = !this.active;
    } else {
      console.log('activating');
      this.active = !this.active;
    }
  }
}
