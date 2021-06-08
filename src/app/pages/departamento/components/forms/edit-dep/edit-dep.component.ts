import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Departamento} from '../../../../departamento/models/departamento';

@Component({
  selector: 'app-departamento-edit',
  templateUrl: './edit-dep.component.html',
  styleUrls: ['./edit-dep.component.css']
})
export class DepartamentoEditComponent implements OnInit {
  @Input() departamento: Departamento;
  @Input() title: string;
  departamentoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {
    this.departamentoForm = this.formBuilder.group({
      nom_dep: ['']
      

    });
  }

  ngOnInit(): void {
    if (this.departamento) {
      this.departamentoForm.patchValue({
        nom_dep: this.departamento.nom_dep
        
      });
    }

  }

  public edit(): void {
    if (this.departamentoForm.valid) {
      this.activeModal.close(this.departamentoForm.value);
    }

  }
}
