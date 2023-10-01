import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { UriHelper } from '../helper/uri.helper';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpService) {
    //
  }

  isLoggedIn() {
    localStorage.getItem('user')
  }

  checkingApi() {
    this.httpService.get(UriHelper.getUrl('getDefaultQuestions')).subscribe(data => console.log(data));
  }
}
