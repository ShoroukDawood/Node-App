import { Component, OnInit } from '@angular/core';
import { AllpostsService } from '../../../core/services/posts/allposts.service';
import { Post } from '../../interfaces/posts/posts';
import { SinglePostComponent } from "../single-post/single-post.component";
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-all-posts',
  imports: [SinglePostComponent, FormsModule],
  templateUrl: './all-posts.component.html',
  styleUrl: './all-posts.component.scss'
})
export class AllPostsComponent implements OnInit {
  myPosts!: string;
  formData: FormData = new FormData();


  constructor(private posts: AllpostsService) { }
  postList: Post[] = [];
  ngOnInit(): void {
    this.getAllPosts();
    
  }
  getAllPosts() {
    this.posts.getAllPosts().subscribe({
      next: (res) => {
        console.log('All Posts',res.posts);
        this.postList = res.posts;
      }
    })
  }
  uploadImage(e:Event) {
    console.log('hello');
    let myInputs = e.target as HTMLInputElement;
    if (myInputs.files) {
      console.log(myInputs.files[0]);
      this.formData.append('image', myInputs.files[0])
    }

    else {
      console.log("Not Found any documents");
      
    }
  }
  submitForm() {
    this.formData.append('body', this.myPosts)
    console.log(this.formData);
    
    this.posts.createPost(this.formData).subscribe({
      next:(res)=> {
        console.log(res);
        this.getAllPosts();
        
      }
    })
  }
}
