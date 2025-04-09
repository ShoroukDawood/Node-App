import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baselink } from '../../../BaseLink/baselink';
import { Observable } from 'rxjs';
import { Comment, Ucomment } from '../../../features/interfaces/comments/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private _http:HttpClient) { }
    createComment(commentData:Comment): Observable<any>{
      return this._http.post(`${baselink.BaseUrl}/comments`, commentData)
    }
    getPostComment(id:string): Observable<any>{
      return this._http.get(`${baselink.BaseUrl}/posts/${id}/comments`)
    }
    updateComment(id:string,body:Ucomment): Observable<any>{
      return this._http.put(`${baselink.BaseUrl}/comments/${id}`,body)
    }
    deleteComment(id:string): Observable<any>{
      return this._http.delete(`${baselink.BaseUrl}/comments/${id}`)
    }
}
