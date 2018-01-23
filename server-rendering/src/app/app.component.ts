import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const FACTS_URL: string = 'https://non-ssr-angular.firebaseio.com/facts.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  facts: Observable<any>;
  constructor(private http: Http) {
    this.facts = this.http.get(FACTS_URL).map(res => res.json())
  }
}
