import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'cih-card',
  templateUrl: './cih-card.component.html',
  styleUrls: ['./cih-card.component.css']
})
export class CihCardComponent implements OnInit {
  @Input('dates') dates;
  @Output() datePicked = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  pickDate(d){
   this.datePicked.emit(d);
  }
}
