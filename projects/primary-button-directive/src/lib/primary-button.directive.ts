import { Directive } from '@angular/core';
import { BaseTextButtonDirective } from 'base-text-button-directive';

@Directive({
  selector: '[primaryButton]',
  standalone: true
})
export class PrimaryButtonDirective extends BaseTextButtonDirective {
  protected override buttonType: string = 'primary';
}