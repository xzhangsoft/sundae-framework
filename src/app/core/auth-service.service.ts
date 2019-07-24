import { Injectable } from '@angular/core';

interface ISignOnRes {
  name?: string;
  pass?: string;
  type?: string;
  profile?: string;
}

interface ISignOffRes {
  state?: boolean;
  error?: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  userNone = {}

  userPrimary = {
    name: 'maggie',
    pass: '123123',
    type: 'primary',
    profile: ''
  }

  userDanger = {
    name: 'marshall',
    pass: '321321',
    type: 'danger',
    profile: ''
  }

  constructor() { }

  signIn(): ISignOnRes {
    return this.userPrimary;
  }

  signOff(): ISignOffRes {
    return null;
  }
}
