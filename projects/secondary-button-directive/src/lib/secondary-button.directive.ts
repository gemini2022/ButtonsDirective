import { Directive } from '@angular/core';
import { BaseTextButtonDirective } from 'base-text-button-directive';

@Directive({
  selector: '[secondaryButton]',
  standalone: true
})
export class SecondaryButtonDirective extends BaseTextButtonDirective {
  protected override buttonType: string = 'secondary';
}