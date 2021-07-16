import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Seccion}   from '../../../model/seccion';
import { Grado} from '../../../../grado/model/grado';
import { Nivel } from 'src/app/pages/nivel/model/nivels';

@Component({
  selector: 'app-seccion-list',
  templateUrl: './seccion-list.component.html',
  styleUrls: ['./seccion-list.component.css']
})
export class SeccionListComponent implements OnInit {

  @Input() grados:Grado[];
  @Input() niveles:Nivel[];
  @Input() secciones:Seccion[];
  @Output() onNew:EventEmitter<boolean>=new EventEmitter();
  @Output() onEdit:EventEmitter<bigint>=new EventEmitter();
  @Output() onDelete:EventEmitter<bigint>=new EventEmitter();
  @Output() SeccionGradosList:EventEmitter<number>=new EventEmitter();
  @Output() SeccionNivelesList:EventEmitter<number>=new EventEmitter();

  constructor() { }


  ngOnInit(): void {
    this.getListNivelesToSeccion;
  }
  
  public newSeccion():void{
    this.onNew.emit(true);
  }

  public editSeccion(id:bigint):void{
    this.onEdit.emit(id);
  }

  public delete(id:bigint):void{
    this.onDelete.emit(id);
  }

  public getListNivelesToSeccion(id:number){
    this.SeccionNivelesList.emit(id);
  }

}
