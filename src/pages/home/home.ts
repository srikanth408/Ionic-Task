import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {serviceComponent} from 'C:/Users/srkaipu/myApp/src/app/app.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[serviceComponent]
})
export class HomePage {
  public empData:any;

  constructor(public navCtrl: NavController,
  private userService:serviceComponent) {

  }

  ngOnInit(){
    this.getEmployeeData();
  }
  

  getEmployeeData(){
    return this.userService.getUsers()
    .subscribe((res)=>{this.empData = res;
      console.log(this.empData);
    });
  }

}

