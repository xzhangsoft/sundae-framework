import { BaseInjects } from './../core/BaseInjects';
import { UserState } from './../core/userState';
import { SimplePage } from './../core/simplePage';
import { IonSlides } from '@ionic/angular';
import { Component, ViewChild } from '@angular/core';
import { AuthServiceService } from '../core/auth-service.service';
import { ThemeService } from '../core/theme.service';
import { ContentService } from '../core/content.service';
import { IContent, IApiContent } from '../core/interface/base.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page extends SimplePage {
  @ViewChild(IonSlides) slides: IonSlides;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  recommandNews: any = {};
  recommandEntry: any = {};

  getRecommandNews() {
    this.contentService.getRecommandNewsContentRequest().subscribe((res: IContent) => {
      this.recommandNews = res.body;
    })
  }

  getRecommandEntry() {
    this.contentService.getRecommandEntryContentRequest().subscribe((res: IContent) => {
      this.recommandEntry = res.body;
    })
  }

  constructor(public inject: BaseInjects, private apiService: ContentService) {
    super(inject);
    this.getRecommandNews();
    this.getRecommandEntry();
  }

  ionViewWillEnter() {
    this.slides.startAutoplay();
  }


  ionViewDidEnter() {
    this.slides.startAutoplay();
  }

  searchChange(event) {
    const searchValue = (<HTMLInputElement>event.target).value;
  }

}
