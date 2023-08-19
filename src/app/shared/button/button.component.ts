import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() public buttonText: string = '';
  @Output() public clickAction = new EventEmitter

  public onClick() {
    this.clickAction.emit()
  }
}
