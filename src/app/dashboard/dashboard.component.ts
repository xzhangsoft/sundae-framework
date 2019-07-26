import { ThemeService } from './../core/theme.service';
import { Component, OnInit } from '@angular/core';
import { SimplePage } from '../core/simplePage';
import { AuthServiceService } from '../core/auth-service.service';
import { UserState } from '../core/userState';
import { BaseInjects } from '../core/BaseInjects';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent extends SimplePage implements OnInit {

  constructor(public inject: BaseInjects,
    public themeService: ThemeService) {
    super(inject);
  }

  ngOnInit() { }

  switchToPrimary(targetTheme) {
    this.themeService.switchTheme(targetTheme);
  }

}
