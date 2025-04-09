import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CommentService } from '../../../core/services/posts/comment.service';
import { CommentDetials } from '../../interfaces/comments/comment';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-comments',
  imports: [DatePipe, ReactiveFormsModule],
templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent implements OnInit{
  @Input() postId!: string;
  commentList: CommentDetials[] = [];
  commentForm!: FormGroup
  constructor(private _comment: CommentService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.getAllComments();
    this.commentForm = new FormGroup({
      content:new FormControl(null),
      post:new FormControl(this.postId),
    })
    
  }
   ngOnInit(): void {
    console.log('Received postId:', this.postId);
  }

  getAllComments() {
    this._comment.getPostComment(this.postId).subscribe({
      next: (res) => {
        console.log("comments:", res.comments);
        this.commentList = res.comments.splice(1,5);
        
      }, error: (err) => {
        console.log(err);
        
      }
    })
  }
  createComment() {
    console.log(this.commentForm.value);
    this._comment.createComment(this.commentForm.value).subscribe({
      next:(res)=>{
        this.getAllComments();``
        
      }
    })
  
}
}
