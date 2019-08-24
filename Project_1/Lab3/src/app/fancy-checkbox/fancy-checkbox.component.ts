import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fancy-checkbox',
  templateUrl: './fancy-checkbox.component.html',
  styleUrls: ['./fancy-checkbox.component.css']
})
export class FancyCheckboxComponent implements OnInit {
  @Input() label:string;
  constructor() { }

  ngOnInit() {
  }

}
