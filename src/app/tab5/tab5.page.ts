import { Component } from '@angular/core';
import { SimplePage } from '../core/simplePage';
import { AuthServiceService } from '../core/auth-service.service';
import { UserState } from '../core/userState';
import { ThemeService } from '../core/theme.service';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page extends SimplePage {

  constructor(protected authServiceService: AuthServiceService,
    protected userState: UserState,
    protected themeSerice: ThemeService) {
    super(authServiceService, userState, themeSerice);
  }


}
