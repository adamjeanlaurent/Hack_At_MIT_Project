import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  readonly ROOT_URL = 'http://localhost:3000/'

  orgs: any;

  getOrgs(category) {
    this.orgs = this.http.get(this.ROOT_URL + 'api/studentOrgs/' + category);
  }
}
