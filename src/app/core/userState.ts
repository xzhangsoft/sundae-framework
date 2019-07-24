import { Observable, observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserState {

  userRef: Observable<Object>;

  constructor() {
  }

  authState: any;

  isAuth(): boolean {
    return true;
  }

}
