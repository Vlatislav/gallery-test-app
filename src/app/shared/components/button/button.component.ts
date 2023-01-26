import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string;
  @Output() onClick = new EventEmitter<void>();

  onButtonClick() {
    this.onClick.emit();
  }
}
