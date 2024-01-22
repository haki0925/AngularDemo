import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // 指定 users 的型別為字串陣列
  //var users = new string[];
  //變數名稱:型別=值
  users: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.users = ["ann", "ben"];
  }

}
