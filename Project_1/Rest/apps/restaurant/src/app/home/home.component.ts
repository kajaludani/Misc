import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rest-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() person:any
  constructor() { }

  ngOnInit() {
  }

}
