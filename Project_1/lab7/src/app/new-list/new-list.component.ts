import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {
        selectedNewsId:number
        newsItems = [{
            title: "hey hey hey hey hey hey",
            body: "hello hello hello hello"
            },
            {
            title: "hey hey hey hey hey hey",
            body: "hello hello hello hello" 
            }]
        expandNews(id:number){
          this.selectedNewsId = id
          return false
}
  constructor() { }

  ngOnInit() {
  }

}
