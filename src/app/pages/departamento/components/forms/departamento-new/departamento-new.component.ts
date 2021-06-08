import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-departamento-new',
  templateUrl: './departamento-new.component.html',
  styleUrls: ['./departamento-new.component.css']
})
export class DepartamentoNewComponent implements OnInit {
  departamentoForm: FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {
    this.departamentoForm = this.formBuilder.group({
      nom_dep: ['', [Validators.required]]
      
    });
  }

  ngOnInit(): void {
    
  }

  public save(): void {
    if (this.departamentoForm.valid) {
      this.activeModal.close(this.departamentoForm.value);
    }

  }

}
