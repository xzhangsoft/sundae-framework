import { Component } from '@angular/core';
import { SimplePage } from '../core/simplePage';
import { BaseInjects } from '../core/BaseInjects';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page extends SimplePage {

  constructor(public inject: BaseInjects) {
    super(inject);
  }

}
