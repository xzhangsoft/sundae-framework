import { Injectable } from '@angular/core';
import { observable, computed } from "mobx";

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

  mode: string;

  constructor() { }

  switchTheme(targetTheme) {
    this.state.theme.set(targetTheme);
  }

}
