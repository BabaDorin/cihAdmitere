import { Component, OnInit } from '@angular/core';
import { DatabaseOperationsService } from '../database-operations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private databaseOp: DatabaseOperationsService) { 
    // databaseOp.init();
  }

  ngOnInit(): void {
  }

}
