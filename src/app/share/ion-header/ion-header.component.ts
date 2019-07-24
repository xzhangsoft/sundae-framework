import { Component, OnInit, Input } from '@angular/core';
import { SimplePage } from 'src/app/core/simplePage';
import { AuthServiceService } from 'src/app/core/auth-service.service';
import { UserState } from 'src/app/core/userState';
import { ThemeService } from 'src/app/core/theme.service';

@Component({
  selector: 'app-ion-header',
  templateUrl: './ion-header.component.html',
  styleUrls: ['./ion-header.component.scss'],
})
export class IonHeaderComponent extends SimplePage implements OnInit {

  @Input() title: any;

  constructor(protected authServiceService: AuthServiceService,
    protected userState: UserState,
    protected themeSerice: ThemeService) {
    super(authServiceService, userState, themeSerice);
  }

  ngOnInit() { }

}
