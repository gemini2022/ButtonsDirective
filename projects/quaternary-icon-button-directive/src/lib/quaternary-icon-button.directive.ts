import { Directive } from '@angular/core';
import { BaseIconButtonDirective } from 'base-icon-button-directive';

@Directive({
  selector: '[quaternaryIconButton]',
  standalone: true
})
export class QuaternaryIconButtonDirective extends BaseIconButtonDirective {
  protected override buttonType: string = 'quaternary-icon';
}