import { BaseInjects } from 'src/app/core/BaseInjects';
import { Component } from '@angular/core';
import { SimplePage } from '../core/simplePage';
import { AuthServiceService } from '../core/auth-service.service';
import { UserState } from '../core/userState';
import { ThemeService } from '../core/theme.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page extends SimplePage {

  constructor(public inject: BaseInjects) {
    super(inject);
  }

}
