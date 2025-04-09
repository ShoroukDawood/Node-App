import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CommentsComponent } from "../comments/comments.component";

@Component({
  selector: 'app-single-post',
  imports: [DatePipe, CommentsComponent],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {
@Input() post:any;
}

