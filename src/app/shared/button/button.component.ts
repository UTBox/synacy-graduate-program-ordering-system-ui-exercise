import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output() public clickAction = new EventEmitter<any>();

  public onClick(){
    this.clickAction.emit();
  }
}
