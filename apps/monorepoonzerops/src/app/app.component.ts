import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@monorepoonzerops/api-interfaces';

@Component({
  selector: 'monorepoonzerops-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('https://api-8-3333-demo.devel.zerops.io/api/hello');
  constructor(private http: HttpClient) {}
}
