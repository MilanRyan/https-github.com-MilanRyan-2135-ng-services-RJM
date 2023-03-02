import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../myservice.service';

@Component({
selector: 'app-new-cmp',
templateUrl: './new-cmp.component.html',
styleUrls: ['./new-cmp.component.css'],
})
export class NewCmpComponent implements OnInit {
todaydate;
newcomponent = 'Entered in newcomponent';
constructor(private myservice: MyserviceService) {}

ngOnInit(): void {
this.todaydate = this.myservice.showTodayDate();


}
}


/*import { Component, VERSION } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
selector: 'my-app',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
})
export class AppComponent {
title = "middemo";
todaydate;
componentproperty;
constructor(private myservice: MyserviceService) {}
ngOnInit() {
this.todaydate = this.myservice.showTodayDate();

console.log(this.myservice.serviceproperty);
this.myservice.serviceproperty = "compoenent created"; //
this.componentproperty = this.myservice.serviceproperty;
}
}
*/