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

    const clonedRequest = request.clone({ headers: request.headers.append('Access-Control-Allow-Origin', 'http://localhost:8080/') });
    return next.handle(clonedRequest);
  }
}
