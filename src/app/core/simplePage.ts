import { AuthServiceService } from './auth-service.service';
import { ThemeService } from './theme.service';
import { BaseInjects } from './BaseInjects';
import { ContentService } from './content.service';

export class SimplePage {

  authServiceService: AuthServiceService;
  themeService: ThemeService;
  contentService: ContentService;

  constructor(public inject: BaseInjects) {
    // inject all useful services in SimplePage subClass
    this.authServiceService = inject.authServiceService;
    this.themeService = inject.themeSerice;
    this.contentService = inject.contentService;
  }

  // diff themes shown by user type, default as primary
  getUserType() {
    return this.authServiceService.signIn().type || 'primary';
  }

  getTheme() {
    return this.getUserType() ? 'app-theme-' + this.getUserType() : 'app-theme-primary';
  }

  getColor() {
    return this.getUserType() || 'primary';
  }

  // manually choose themes 
  getSwitchedColor() {
    return this.themeService.theme.get();
  }

  getSwitchedTheme() {
    return this.themeService.theme.get() ? 'app-theme-' + this.themeService.theme.get() : 'app-theme-primary';
  }

  // got app static content for all components
  getStaticContentBody() {
    return this.contentService.getStaticContent;
  }
}
