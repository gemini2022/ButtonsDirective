import { Directive } from '@angular/core';
import { BaseIconButtonDirective } from 'base-icon-button-directive';

@Directive({
  selector: '[secondaryIconButton]',
  standalone: true
})
export class SecondaryIconButtonDirective extends BaseIconButtonDirective {
  protected override buttonType: string = 'secondary-icon';
}