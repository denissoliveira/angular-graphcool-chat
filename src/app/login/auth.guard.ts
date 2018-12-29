import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, CanActivateChild, CanLoad, Router, Route } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';
import { AuthService } from '../core/services/auth.service';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: LoginRoutingModule // fazendo a injeção inversa
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log(state.url);
    return this.checkAuthState(state.url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): Observable<boolean> {
    const url = route.path;
    // no curso - const url = window.location.pathname
    console.log(url);
    return this.checkAuthState(url)
      .pipe(take(1)); // take executa somente uma vez
  }

  private checkAuthState(url: string): Observable<boolean> {
    return this.authService.isAuthenticated
      .pipe(
        tap(is => {
          if (!is) {
            this.authService.redirectUrl = url;
            this.router.navigate(['/login']);
          }
        })
      );
  }

}
