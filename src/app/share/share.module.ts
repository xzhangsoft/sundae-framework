import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeaderComponent } from './ion-header/ion-header.component';
import { IonCardComponent } from './ion-card/ion-card.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

const components = [
  IonHeaderComponent,
  IonCardComponent
]


@NgModule({
  declarations: [components],
  imports: [
    // CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [components]
})
export class ShareModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ShareModule
    };
  }
}
