import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Explore Different Organizations";

  readonly ROOT_URL = 'http://localhost:3000/'

  orgs: any;

  constructor(private http: HttpClient) {}

  getOrgs(category) {
    this.orgs = this.http.get(this.ROOT_URL + 'api/studentOrgs/' + category);
  }
}
