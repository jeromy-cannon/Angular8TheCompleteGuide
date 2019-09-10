import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // turn off the encapsulation for adding the unique attributes to each 
  // element that is part of this component.
  // encapsulation: ViewEncapsulation.None
  encapsulation: ViewEncapsulation.Emulated // or None or Native
})
export class ServerElementComponent implements OnInit {
  // srvElement is an alias
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit() {
  }

}
