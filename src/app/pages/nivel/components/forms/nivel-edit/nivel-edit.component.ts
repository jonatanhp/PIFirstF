import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Nivel } from '../../../model/nivels';

@Component({
  selector: 'app-nivel-edit',
  templateUrl: './nivel-edit.component.html',
  styleUrls: ['./nivel-edit.component.css']
})
export class NivelEditComponent implements OnInit {

  @Input() nivel: Nivel;
  @Input() title: string;
  nivelForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) { 
    this.nivelForm = this.formBuilder.group({
      nom_nivel: [''],
      desc_nivel: ['']

    });
  }

  ngOnInit(): void {
    if (this.nivel) {
      this.nivelForm.patchValue({
        nom_nivel: this.nivel.nom_nivel,
        //console.log(this.nivel.nom_nivel);
        desc_nivel: this.nivel.desc_nivel
      });
    }
    console.log(this.nivel.nom_nivel);

  }

  public edit(): void {
    if (this.nivelForm.valid) {
      this.activeModal.close(this.nivelForm.value);
    }

  }

}
