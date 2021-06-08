import {Component, OnInit} from '@angular/core';

import {DepartamentosService} from '../../../../../providers/departamentos/departamentos.service';
import {Departamento} from '../../models/departamento';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DepartamentoNewComponent} from '../../components/forms/departamento-new/departamento-new.component';
import {DepartamentoEditComponent} from '../../components/forms/edit-dep/edit-dep.component';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {
  error: string;
  departamentos: Departamento[];
  departamento: Departamento;

  constructor(private departamentoService: DepartamentosService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getDepartamentos();
  }

  getDepartamentos(): void {
    this.departamentoService.getDepartamento().subscribe(response => {
      this.departamentos = response.data;
      console.log(this.departamentos);
    }, error => {
      this.error = error;
    });
  }

  public onNewDepartamento($event): void {
    if ($event) {
      const departamentoForm = this.modalService.open(DepartamentoNewComponent, {size: 'lg'});
      departamentoForm.componentInstance.title = 'Nuevo Departamentoo';
      departamentoForm.result.then((result) => {
        this.departamentoService.postDepartamento(result).subscribe(response => {
          if (response.success) {
            this.getDepartamentos();
          }
        }, error => {
          this.error = error;
        });

      });
    }
  }

  public delete(id: number): void {
    this.departamentoService.deleteDepartamento(id).subscribe(response => {
      if (response.success) {
        this.getDepartamentos();
      }
    }, error => {
      this.error = error;
    });
  }

  edit(id: number): void {
    this.departamentoService.getDepartamentoById(id).subscribe(response => {
      this.departamento = response.data;

      const departamentoForm = this.modalService.open(DepartamentoEditComponent, {size: 'lg'});
      departamentoForm.componentInstance.title = 'Editar Departamentoo';
      departamentoForm.componentInstance.departamento = this.departamento;
      departamentoForm.result.then((result) => {
        if (result) {
          this.departamentoService.updateDepartamento(this.departamento.id, result).subscribe(resp => {
            if (resp.success) {
              this.getDepartamentos();
            }
          }, error => {
            this.error = error;
          });
        }
        console.log(result);
      });

    }, error => {
      this.error = error;
    });
  }
}
