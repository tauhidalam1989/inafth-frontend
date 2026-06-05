import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { merge, Subscription, fromEvent, interval } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';

/** How often we compare clock to last activity (lightweight) */
const CHECK_EVERY_MS = 30 * 1000;

@Injectable({
  providedIn: 'root'
})
export class IdleTimeoutService {
  private readonly idleMs = environment.idleLogoutMinutes * 60 * 1000;
  private lastActivity = Date.now();
  private activitySub?: Subscription;
  private checkSub?: Subscription;
  private watching = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.authService.isAuthenticated$.subscribe((isAuth) => {
      if (isAuth) {
        this.startWatching();
      } else {
        this.stopWatching();
      }
    });
  }

  private startWatching(): void {
    if (this.watching) {
      this.lastActivity = Date.now();
      return;
    }
    this.watching = true;
    this.lastActivity = Date.now();

    const events = [
      fromEvent(document, 'mousemove', { passive: true }),
      fromEvent(document, 'mousedown', { passive: true }),
      fromEvent(document, 'keydown'),
      fromEvent(document, 'scroll', { passive: true }),
      fromEvent(document, 'touchstart', { passive: true }),
      fromEvent(window, 'click', { passive: true })
    ];

    this.ngZone.runOutsideAngular(() => {
      this.activitySub = merge(...events)
        .pipe(throttleTime(1000, undefined, { leading: true, trailing: true }))
        .subscribe(() => {
          this.lastActivity = Date.now();
        });

      this.checkSub = interval(CHECK_EVERY_MS).subscribe(() => {
        if (!this.authService.isAuthenticated()) {
          return;
        }
        if (Date.now() - this.lastActivity >= this.idleMs) {
          this.ngZone.run(() => this.onIdle());
        }
      });
    });
  }

  private stopWatching(): void {
    this.watching = false;
    this.activitySub?.unsubscribe();
    this.activitySub = undefined;
    this.checkSub?.unsubscribe();
    this.checkSub = undefined;
  }

  private onIdle(): void {
    this.stopWatching();
    this.authService.logout();
    void this.router.navigate(['/auth/login']);
  }
}
