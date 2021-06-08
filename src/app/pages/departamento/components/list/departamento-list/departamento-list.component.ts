import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Departamento} from '../../../models/departamento';


@Component({
  selector: "app-departamento-list",
  templateUrl: './departamento-list.component.html',
  styleUrls: ['./list-departamento.component.css']
})
export class DepartamentoListComponent implements OnInit {
  @Input() departamentos: Departamento[];
  @Output() onNew: EventEmitter<boolean> = new EventEmitter();
  @Output() onDelete: EventEmitter<number> = new EventEmitter();
  @Output() onEdit: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  public newDepartamento(): void {
    this.onNew.emit(true);
  }

  public delete(id: number): void {
    this.onDelete.emit(id);
  }

  public edit(id: number): void {
    this.onEdit.emit(id);
  }
}
