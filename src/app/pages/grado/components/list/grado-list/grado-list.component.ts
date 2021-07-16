import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Grado } from '../../../model/grado';
import { Nivel } from 'src/app/pages/nivel/model/nivels';

@Component({
  selector: 'app-grado-list',
  templateUrl: './grado-list.component.html',
  styleUrls: ['./grado-list.component.css']
})
export class GradoListComponent implements OnInit {
  
  @Input() gradosf:Grado[];
  @Input() listaNiveles:Nivel[];
  @Input() nivelt:Grado[];
  @Output() onNew:EventEmitter<boolean>=new EventEmitter();
  @Output() onEdit:EventEmitter<bigint>=new EventEmitter();
  @Output() onDelete:EventEmitter<bigint>=new EventEmitter();
  @Output() NivelOfGrado:EventEmitter<number>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.searchNivelOfGrado;
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

  public searchNivelOfGrado(id:number){
    this.NivelOfGrado.emit(id);
  }


}
