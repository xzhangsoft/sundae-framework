import { AuthServiceService } from './auth-service.service';
import { UserState } from './userState';
import { ThemeService } from './theme.service';
import { ContentService } from './content.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseInjects {
  constructor(public authServiceService: AuthServiceService,
    public userState: UserState,
    public themeSerice: ThemeService,
    public contentService: ContentService) { }
}