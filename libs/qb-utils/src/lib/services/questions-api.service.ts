import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpService } from "./http.service";
import { UriHelper } from "../helper/uri.helper";
import { Questions } from "../interfaces/Questions";

@Injectable({ providedIn: 'root' })
export class QuestionService {

  constructor(
    private http: HttpService
  ) {
  }

  getDefaultQuestions(): Observable<Questions[]> {
    return this.http.get(UriHelper.getUrl('getDefaultQuestions'));
  }
}