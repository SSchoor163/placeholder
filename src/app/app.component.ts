import { Component, OnInit, ViewChild } from '@angular/core';
import {ITodo} from './itodo';
import {PalceholdService} from './palcehold.service';
import { MatTableDataSource } from '@angular/material';
import {MatSortModule, MatSort} from '@angular/material'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todoList:ITodo[] =[];
 
  constructor(private placeHolder:PalceholdService){}
  dataSource:MatTableDataSource<ITodo>;

  displayedColumns:string[] = ["id", "userId", "title", "completed"];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit(){
    this.placeHolder.getAll().subscribe(data=>{
      this.todoList = data;
      this.dataSource = new MatTableDataSource(this.todoList);
      
      
    });
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  
  
}
