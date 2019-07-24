import { Directive } from '@angular/core';

@Directive({
  selector: '[appCanActivateViaAuthGuard]'
})
export class CanActivateViaAuthGuardDirective {

  constructor() { }

}
