import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../model/blogposts';
import { Observable } from 'rxjs';
import { BlogPostService } from '../services/blog-post.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  blogPosts$: Observable<BlogPost[]>;
  constructor(private blogPostService: BlogPostService) { }

  ngOnInit() {
    this.loadBlogPosts();
  }
  loadBlogPosts() {
    this.blogPosts$ = this.blogPostService.getBlogPosts();
  }

}
