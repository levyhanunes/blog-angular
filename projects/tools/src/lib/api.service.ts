import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'projects/models/user.interface';
import { Router } from '@angular/router';
import { Post } from 'projects/models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private URL: string = 'https://rivaille-dev.herokuapp.com/api/v1'
  private authState$ = new BehaviorSubject<boolean>(false)

  private user: User = {
    email: '',
    firstname: '',
    id: -1,
    lastname: '',
    roles: '',
  }

  constructor(
    private http: HttpClient,
    private router: Router
    ) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.URL}/posts`)
  }
}
