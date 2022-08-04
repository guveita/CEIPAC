import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.scss']
})
export class FamiliaComponent implements OnInit {
  @Input() titulo: string;
  @Input() cuerpo: string;
  @Input() imageURL: string;

  constructor() { 
    this.titulo = ""
    this.cuerpo = ""
    this.imageURL = ""
  }

  ngOnInit(): void {
  }

}
