import { Component, OnInit } from '@angular/core';
import { PostService } from '../app/services/post.service';
import { AppError } from '../app/common/app-error';
import { NotFoundError } from '../app/common/not-found-error';
import { BadInput } from '../app/common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    input.value = '';

    this.service.create(post)
      .subscribe(
        response => {
          this.posts.splice(0, 0, post);
          post['id'] = response.json().id;
          // console.warn(response.json());
        },
        (error: AppError) => {
          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
            alert('Sample error message.');
          } else {
            throw error;
          }
        });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        response => {
          console.warn(response.json());
        }
      );
  }

  deletePost(post) {
    this.service.delete(post.id)
      .subscribe(
        response => {
          const index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert('This post has already been deleted.');
          } else {
            throw error;
          }
        }
      );
  }

}
