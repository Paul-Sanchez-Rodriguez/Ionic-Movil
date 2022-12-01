import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  users: any = [];
  constructor(
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.getUser().subscribe(res =>{
      console.log("res " ,res)
      this.users = res;
    })
  }


  goHome(){
    this.router.navigate(['/home'])
  }

  getUser(){
    return this.http
    .get("assets/files/customer.json")
    .pipe(
      map((res: any) =>{
        return res.data;
      })
    )
  }
}
