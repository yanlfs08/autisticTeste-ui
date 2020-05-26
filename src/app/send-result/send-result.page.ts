import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {environment} from "../../../src/environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-send-result',
  templateUrl: './send-result.page.html',
  styleUrls: ['./send-result.page.scss'],
})
export class SendResultPage implements OnInit {

  data;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient) {
    this.route.queryParams.subscribe(params => {
      let getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.data = getNav.extras.state.data;
        console.log(this.data);
      }
    });
  }

  ngOnInit() {
  }

  form = {
    name: "",
    email: ""
  }

  sendResult() {
    const body = {
      "name": this.form.name,
      "email": this.form.email,
      "data": this.data
    }

    return this.http.post(`${environment.baseUrl}/api/v1/users/validade`, body, {}).toPromise().then((res) => {
      console.log('res = ', res);
    })
  }

}
