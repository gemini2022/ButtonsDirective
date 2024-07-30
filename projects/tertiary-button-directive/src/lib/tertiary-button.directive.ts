import { Directive } from '@angular/core';
import { BaseTextButtonDirective } from 'base-text-button-directive';

@Directive({
  selector: '[tertiaryButton]',
  standalone: true
})
export class TertiaryButtonDirective extends BaseTextButtonDirective {
  protected override buttonType: string = 'tertiary';
}