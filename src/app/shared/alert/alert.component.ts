import {Component} from '@angular/core';
import {AlertState} from "./state.enum";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() isShow: any = false;
  @Input() state: AlertState = AlertState.INFO;

}
