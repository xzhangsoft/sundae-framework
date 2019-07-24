import { Component, OnInit } from '@angular/core';
import { SimplePage } from '../core/simplePage';
import { AuthServiceService } from '../core/auth-service.service';
import { UserState } from '../core/userState';
import { ThemeService } from '../core/theme.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends SimplePage implements OnInit {

  constructor(protected authServiceService: AuthServiceService,
    protected userState: UserState,
    protected themeService: ThemeService) {
    super(authServiceService, userState, themeService);
  }

  ngOnInit() { }

}
