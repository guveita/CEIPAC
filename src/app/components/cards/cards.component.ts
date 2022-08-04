import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() titulo: string;
  @Input() cuerpo: string;
  @Input() imageURL: string;
  @Input() cardStyle: string;

  constructor() { 
    this.titulo = ""
    this.cuerpo = ""
    this.imageURL = ""
    this.cardStyle = ""
  }
  ngOnInit(): void {
  }

}
