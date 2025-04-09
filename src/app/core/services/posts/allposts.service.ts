import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baselink } from '../../../BaseLink/baselink';
import { Post } from '../../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class AllpostsService {

  constructor(private _http:HttpClient) { }
  getAllPosts(): Observable<any>{
    return this._http.get(`${baselink.BaseUrl}/posts?limit=50`)
  }
  createPost(deployData:any): Observable<any>{
    return this._http.post(`${baselink.BaseUrl}/posts`,deployData)
  }
  getUserPosts(id:string): Observable<any>{
    return this._http.get(`${baselink.BaseUrl}/users/${id}/posts?limit=2`)
  }
  getSinglePost(id:string): Observable<any>{
    return this._http.get(`${baselink.BaseUrl}/posts/${id}`)
  }
  updatePost(id:string,postData:any): Observable<any>{
    return this._http.put(`${baselink.BaseUrl}/posts/${id}`, postData)
  }
  deletePost(id:string): Observable<any>{
    return this._http.delete(`${baselink.BaseUrl}/posts/${id}`)
  }
}
