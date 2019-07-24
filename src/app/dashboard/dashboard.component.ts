import { ThemeService } from './../core/theme.service';
import { Component, OnInit } from '@angular/core';
import { SimplePage } from '../core/simplePage';
import { AuthServiceService } from '../core/auth-service.service';
import { UserState } from '../core/userState';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent extends SimplePage implements OnInit {

  constructor(protected authServiceService: AuthServiceService,
    protected userState: UserState,
    protected themeSerice: ThemeService) {
    super(authServiceService, userState, themeSerice);
  }

  ngOnInit() { }

  switchToPrimary(targetTheme) {
    this.themeSerice.switchTheme(targetTheme);
  }

}
