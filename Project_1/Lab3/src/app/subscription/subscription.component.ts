import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
@Input() interests:[string]
  constructor() { }

  ngOnInit() {
  }

}
