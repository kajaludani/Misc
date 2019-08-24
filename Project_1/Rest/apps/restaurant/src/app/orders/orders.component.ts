import { Component, OnInit, Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'rest-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  // changeDetection: ChangeDetectionStrategy.Default

})
export class OrdersComponent implements OnInit {
  @Input() person:any
  constructor() {
   }

  ngOnInit() {
    
  }
}
