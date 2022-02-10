import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from 'projects/models/post.interface';
import { ApiService } from 'projects/tools/src/lib/api.service';
import { Subject, Subscription, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  posts: Post[] = []
  sub$ = new Subject();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllPosts().pipe(
      takeUntil(this.sub$)
    ).subscribe(res => this.posts = res);
  }

  ngOnDestroy(): void {
    this.sub$.next(this);
    this.sub$.complete();
  }

}
