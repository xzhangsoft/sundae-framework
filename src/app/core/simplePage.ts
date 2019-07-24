import { AuthServiceService } from './auth-service.service';
import { UserState } from './userState';
import { ThemeService } from './theme.service';

export class SimplePage {

  constructor(protected authServiceService: AuthServiceService,
    protected userState: UserState,
    protected themeService: ThemeService) { }

  getUserType() {
    return this.authServiceService.signIn().type || 'primary';
  }

  getTheme() {
    return this.getUserType() ? 'app-theme-' + this.getUserType() : 'app-theme-primary';
  }

  getColor() {
    return this.getUserType() || 'primary';
  }

  getSwitchedColor() {
    return this.themeService.theme.get();
  }

  getSwitchedTheme() {
    return this.themeService.theme.get()? 'app-theme-' + this.themeService.theme.get() : 'app-theme-primary';
  }

}
