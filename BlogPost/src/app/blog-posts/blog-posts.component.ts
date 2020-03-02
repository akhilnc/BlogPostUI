import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPostService } from '../services/blog-post.service';
import { BlogPost } from '../model/blogposts';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {

  blogPosts$: Observable<BlogPost[]>;
  constructor(private blogPostService: BlogPostService) { }

  ngOnInit() {
    this.loadBlogPosts();
  }
  loadBlogPosts() {
    this.blogPosts$ = this.blogPostService.getBlogPosts();
  }

}
