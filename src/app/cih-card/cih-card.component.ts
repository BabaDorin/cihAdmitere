import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cih-card',
  templateUrl: './cih-card.component.html',
  styleUrls: ['./cih-card.component.css']
})
export class CihCardComponent implements OnInit {
  @Input('dates') dates;

  dataAleasa: boolean;

  constructor() { }

  ngOnInit(): void {
  }
}
