import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  isServer: boolean=false;

@Input() element: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit(): void {
    this.isServer= this.element.type === 'server';
  }
}
