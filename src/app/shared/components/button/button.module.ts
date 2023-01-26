import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button.component';
@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
