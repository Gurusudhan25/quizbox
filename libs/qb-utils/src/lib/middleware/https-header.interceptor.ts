import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpsHeaderInterceptor implements HttpInterceptor {

  constructor() {
    //
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request.headers.set('Content-Type', 'application/json');
    request.headers.set('Accept', '*/*');
    request.headers.set('Access-Control-Allow-Origin', '*');
    request.headers.append('name', 'guru');
    return next.handle(request);
  }
}
