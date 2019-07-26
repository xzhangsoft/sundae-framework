import { Component, OnInit } from '@angular/core';
import { SimplePage } from '../core/simplePage';
import { AuthServiceService } from '../core/auth-service.service';
import { UserState } from '../core/userState';
import { ThemeService } from '../core/theme.service';
import { ContentService } from '../core/content.service';
import { BaseInjects } from '../core/BaseInjects';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page extends SimplePage implements OnInit {

  constructor(public inject: BaseInjects) {
    super(inject);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
