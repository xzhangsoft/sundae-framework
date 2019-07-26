import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { IContent } from './interface/base.interface';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  sundaeStringsUrl = '/assets/json/sundae-strings.json';

  recommandNewsApiUrl = '/assets/json/mock-apis/getRecommandNews.json';

  recommandEntryApiUrl = '/assets/json/mock-apis/getRecommandEntry.json';

  constructor(protected httpClientService: HttpClientService) { }

  staticContent: IContent;
  recommandNewsContent: IContent;
  recommandEntryContent: IContent;

  get getStaticContent() {
    return this.staticContent.body;
  }

  get getRecommandNewsContent() {
    return this.recommandNewsContent.body;
  }

  get getRecommandEntryContent() {
    return this.recommandEntryContent.body;
  }

  // get static content, including strings and constant value
  async getStaticContentRequest() {
    await this.httpClientService.get(this.sundaeStringsUrl).subscribe((res) => {
      this.staticContent = res;
    });
  }

  getRecommandNewsContentRequest() {
    return this.httpClientService.get(this.recommandNewsApiUrl);
  }

  getRecommandEntryContentRequest() {
    return this.httpClientService.get(this.recommandEntryApiUrl);
  }
}
