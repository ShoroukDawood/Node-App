import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baselink } from '../../../BaseLink/baselink';
import { Register } from '../../../features/interfaces/registerform/reister';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) {
     }
    register(formData:Register ):Observable<any>{
      return this._http.post(`${baselink.BaseUrl}/users/signup`,formData)
  }
   login(formData:Register ):Observable<any>{
      return this._http.post(`${baselink.BaseUrl}/users/signin`,formData)
  }
  
}
