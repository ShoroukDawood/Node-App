import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';

export const socialTokenInterceptor: HttpInterceptorFn = (req, next) => {
  let platform = inject(PLATFORM_ID);
  if (isPlatformBrowser(platform)) {
    if (localStorage.getItem('SocialToken') !== null) {
      let token = { token:localStorage.getItem('SocialToken') || '' }
     req = req.clone({
      setHeaders: token
    })
  }
    }
    
  return next(req);
};
