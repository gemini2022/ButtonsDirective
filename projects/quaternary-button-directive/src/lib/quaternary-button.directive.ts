import { Directive } from '@angular/core';
import { BaseTextButtonDirective } from 'base-text-button-directive';

@Directive({
  selector: '[quaternaryButton]',
  standalone: true
})
export class QuaternaryButtonDirective extends BaseTextButtonDirective {
  protected override buttonType: string = 'quaternary';
}