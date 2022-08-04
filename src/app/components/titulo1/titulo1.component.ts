import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titulo1',
  templateUrl: './titulo1.component.html',
  styleUrls: ['./titulo1.component.scss']
})
export class Titulo1Component implements OnInit {

  @Input() titulo:string;

  constructor() { 
    this.titulo = "" 
  }
  ngOnInit(): void {
  }

}
