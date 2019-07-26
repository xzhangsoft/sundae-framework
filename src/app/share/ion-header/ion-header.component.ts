import { Component, OnInit, Input } from '@angular/core';
import { SimplePage } from 'src/app/core/simplePage';
import { BaseInjects } from 'src/app/core/BaseInjects';

@Component({
  selector: 'app-ion-header',
  templateUrl: './ion-header.component.html',
  styleUrls: ['./ion-header.component.scss'],
})
export class IonHeaderComponent extends SimplePage implements OnInit {

  @Input() title: any;

  constructor(public inject: BaseInjects) {
    super(inject);
  }

  ngOnInit() { }

}
