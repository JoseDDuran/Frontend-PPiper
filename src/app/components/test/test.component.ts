import { Component, OnInit } from '@angular/core';
import { TestService } from './../../services/test.service';
import { Post } from './../../models/user';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public users:Array<Post> = [];
  constructor(public _testService:TestService) { }

  ngOnInit() {
    this.showUsers();
  }

  public showUsers(){
    this._testService.getUsuarios().subscribe(data => {
       Object.entries(data).forEach(([key, value]) => {
          //console.log(key, value)
          this.users.push(new Post(value.id,value.title,value.body));
         }
      )} , err => {console.log(err)});
  }

  public traerAlgo(id){
    alert("Este es el id : " + id)
  }

}
