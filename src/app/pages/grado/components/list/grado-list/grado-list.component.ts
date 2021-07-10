import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Grado } from '../../../model/grado';

@Component({
  selector: 'app-grado-list',
  templateUrl: './grado-list.component.html',
  styleUrls: ['./grado-list.component.css']
})
export class GradoListComponent implements OnInit {

  @Input() grados:Grado[];
  @Output() onNew:EventEmitter<boolean>=new EventEmitter();
  @Output() onEdit:EventEmitter<bigint>=new EventEmitter();
  @Output() onDelete:EventEmitter<bigint>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  public newGrado():void{
    this.onNew.emit(true);
  }

  public editGrado(id:bigint):void{
    this.onEdit.emit(id);
  }

  public delete(id:bigint):void{
    this.onDelete.emit(id);
  }

}
