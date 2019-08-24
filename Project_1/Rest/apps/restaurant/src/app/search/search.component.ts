import { Component, OnInit} from '@angular/core';
// import { Observable, timer } from 'rxjs';

@Component({
  selector: 'rest-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  })
export class SearchComponent implements OnInit {
    // userInput$ :Observable<any>;
    person = {name:'Kajal'}
  constructor() {
  }

  ngOnInit() {
    // this.userInput$ = timer(1000,2000);
    // setInterval(() => {
    //   this.Name = Math.random().toString();
    //   console.log(this.Name);
    // }, 2000);
    // changeProperty{

    // }


  }

}
