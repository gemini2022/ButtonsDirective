import { Directive } from '@angular/core';
import { BaseIconButtonDirective } from 'base-icon-button-directive';

@Directive({
  selector: '[tertiaryIconButton]',
  standalone: true
})
export class TertiaryIconButtonDirective extends BaseIconButtonDirective {
  protected override buttonType: string = 'tertiary-icon';
}