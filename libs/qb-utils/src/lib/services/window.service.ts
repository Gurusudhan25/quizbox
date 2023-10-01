import { BehaviorSubject, fromEvent as observableFromEvent, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { WindowSize } from '../interfaces/WindowSize';

// These breakpoints must match the breakpoints set as $breakpoints in _settings.scss from Foundation
const TINY = 0;
const SMALL = 440;
const MEDIUM = 736;
const LARGE = 1024;
const XLARGE = 1200;

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  private windowSizeSubject: BehaviorSubject<WindowSize> = new BehaviorSubject(this.getWindowSize());
  windowSize$: Observable<WindowSize> = this.windowSizeSubject.asObservable();
  width$: Observable<number> = this.windowSize$.pipe(map(windowSize => windowSize.width), distinctUntilChanged());
  height$: Observable<number> = this.windowSize$.pipe(map(windowSize => windowSize.height), distinctUntilChanged());
  tiny$: Observable<boolean> = this.windowSize$.pipe(map(windowSize => windowSize.tiny), distinctUntilChanged());
  small$: Observable<boolean> = this.windowSize$.pipe(map(windowSize => windowSize.small), distinctUntilChanged());
  medium$: Observable<boolean> = this.windowSize$.pipe(map(windowSize => windowSize.medium), distinctUntilChanged());
  large$: Observable<boolean> = this.windowSize$.pipe(map(windowSize => windowSize.large), distinctUntilChanged());
  xlarge$: Observable<boolean> = this.windowSize$.pipe(map(windowSize => windowSize.xlarge), distinctUntilChanged());
  smallUp$: Observable<boolean> = this.windowSize$.pipe(map(windowSize => windowSize.smallUp), distinctUntilChanged());
  mediumUp$: Observable<boolean> = this.windowSize$.pipe(map(windowSize => windowSize.mediumUp), distinctUntilChanged());
  largeUp$: Observable<boolean> = this.windowSize$.pipe(map(windowSize => windowSize.largeUp), distinctUntilChanged());
  smallDown$: Observable<boolean> = this.windowSize$.pipe(map(windowSize => windowSize.smallDown), distinctUntilChanged());
  mediumDown$: Observable<boolean> = this.windowSize$.pipe(map(windowSize => windowSize.mediumDown), distinctUntilChanged());
  largeDown$: Observable<boolean> = this.windowSize$.pipe(map(windowSize => windowSize.largeDown), distinctUntilChanged());
  smallOnly$: Observable<boolean> = this.windowSize$.pipe(map(windowSize => windowSize.smallOnly), distinctUntilChanged());
  mediumOnly$: Observable<boolean> = this.windowSize$.pipe(map(windowSize => windowSize.mediumOnly), distinctUntilChanged());
  largeOnly$: Observable<boolean> = this.windowSize$.pipe(map(windowSize => windowSize.largeOnly), distinctUntilChanged());

  constructor() {
    observableFromEvent(window, 'resize').pipe(
      map(this.getWindowSize),
      distinctUntilChanged()).subscribe(this.windowSizeSubject);
  }

  private getWindowSize(): WindowSize {
    const w = window.innerWidth;

    return {
      width: w,
      height: window.innerHeight,
      tiny: w >= TINY && w < SMALL,
      small: w >= SMALL && w < MEDIUM,
      medium: w >= MEDIUM && w < LARGE,
      large: w >= LARGE && w < XLARGE,
      xlarge: w >= XLARGE,
      smallDown: w < MEDIUM,
      mediumDown: w < LARGE,
      largeDown: w < XLARGE,
      smallUp: w >=  SMALL,
      mediumUp: w >= MEDIUM,
      largeUp: w >= LARGE,
      smallOnly: w === SMALL,
      mediumOnly: w === MEDIUM,
      largeOnly: w === LARGE
    };
  }
}

