// auth.guard.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, CanActivate } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from 'src/services/AuthService';

@Injectable({
  providedIn: 'root',
})
export class authGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.getUserClaims().then(user => {
      
      if (user) {
        console.log("authentifier");
        return true;
      } else {
        console.log("non authentifier");
        this.router.navigate(['/']);
        return false;
      }
    }).catch(() => {
      this.router.navigate(['/']);
      return false;
    });
  }
}
