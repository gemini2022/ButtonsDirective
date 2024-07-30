import { Directive } from '@angular/core';
import { BaseIconButtonDirective } from 'base-icon-button-directive';

@Directive({
  selector: '[primaryIconButton]',
  standalone: true
})
export class PrimaryIconButtonDirective extends BaseIconButtonDirective {
  protected override buttonType: string = 'primary-icon';
}