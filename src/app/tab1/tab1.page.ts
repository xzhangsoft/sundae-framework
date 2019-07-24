import { UserState } from './../core/userState';
import { SimplePage } from './../core/simplePage';
import { IonSlides } from '@ionic/angular';
import { Component, ViewChild } from '@angular/core';
import { AuthServiceService } from '../core/auth-service.service';
import { ThemeService } from '../core/theme.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page extends SimplePage {
  @ViewChild(IonSlides) slides: IonSlides;

  constructor(protected authServiceService: AuthServiceService,
    protected userState: UserState,
    protected themeSerice: ThemeService) {
    super(authServiceService, userState, themeSerice);
    console.log('getTheme' + this.getTheme());
    this.getCardList();
    this.getRecommandNews();
  }

  ionViewWillEnter() {
    this.slides.startAutoplay();
  }

  ionViewDidEnter() {
    this.slides.startAutoplay();
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    // rotate: 50,
    // stretch: 0,
    // modifier: 1,
    // slideShadows: true
  };

  cardList: any;
  newsList: any;

  getCardList(): any {
    this.cardList = [
      {
        'type': 'dry',
        'name': 'paper',
        'content': '...'
      },
      {
        'type': 'dry',
        'name': 'paper',
        'content': '...'
      },
      {
        'type': 'dry',
        'name': 'paper',
        'content': '...'
      },
      {
        'type': 'dry',
        'name': 'paper',
        'content': '...'
      }
    ];
    return this.cardList;
  }

  getRecommandNews(): any {
    this.newsList = ['./../assets/images/banner-1.jpg',
      './../assets/images/banner-2.jpg',
      './../assets/images/slide-3.png']
  }


  searchChange(event) {
    const searchValue = (<HTMLInputElement>event.target).value;
    console.log(searchValue);
  }


}
