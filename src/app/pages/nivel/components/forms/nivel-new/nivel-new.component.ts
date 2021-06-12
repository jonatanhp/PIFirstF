import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nivel-new',
  templateUrl: './nivel-new.component.html',
  styleUrls: ['./nivel-new.component.css']
})
export class NivelNewComponent implements OnInit {
  nivelForm:FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object>=new EventEmitter();

  constructor(private formBuilder:FormBuilder, public activeModal: NgbActiveModal) {
    this.nivelForm=this.formBuilder.group({
      nom_nivel:['',[Validators.required]],
      desc_nivel:['',[Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  public save():void{
    if (this.nivelForm.valid){
      this.activeModal.close(this.nivelForm.value);
    }
  }

}
