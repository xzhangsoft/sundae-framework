import { Injectable } from '@angular/core';
import { observable, computed, autorun } from "mobx";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  @observable state = {
    theme: observable.box('primary'),
    mode: 'day'
  }

  @computed get theme() {
    return this.state.theme;
  }

  // @computed get theme1() {
  //   return this.theme.get();
  // }

  mode: string;

  constructor() {
    // autorun(() => {
    //   console.log(this.theme.get());
    // });
  }

  switchTheme(targetTheme) {
    this.state.theme.set(targetTheme);
  }

}
