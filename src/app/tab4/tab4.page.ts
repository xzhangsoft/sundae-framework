import { AuthServiceService } from './../core/auth-service.service';
import { Component } from '@angular/core';
import { SimplePage } from '../core/simplePage';
import { UserState } from '../core/userState';
import { ThemeService } from '../core/theme.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page extends SimplePage {

  constructor(protected authServiceService: AuthServiceService,
    protected userState: UserState,
    protected themeSerice: ThemeService) {
    super(authServiceService, userState, themeSerice);
  }

}
