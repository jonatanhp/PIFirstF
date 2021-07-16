import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { GradoService } from 'src/providers/grado/grado.service';
import { Grado } from 'src/app/pages/grado/model/grado';
import { NivelsService } from 'src/providers/nivels/nivels.service';
import { Nivel } from 'src/app/pages/nivel/model/nivels';

@Component({
  selector: 'app-seccion-new',
  templateUrl: './seccion-new.component.html',
  styleUrls: ['./seccion-new.component.css']
})
export class SeccionNewComponent implements OnInit {

  seccionForm:FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object>=new EventEmitter();
  grados:Grado[];
  niveles:Nivel[];
  error:String;

  constructor(private formBuilder:FormBuilder, public activeModal: NgbActiveModal, private gradoService:GradoService, private nivelService:NivelsService) {

    this.seccionForm=this.formBuilder.group({
      nom_seccion:['',[Validators.required]],
      desc_seccion:['',[Validators.required]],
      grado_id1:['',[Validators.required]]
    });

   }

  ngOnInit(): void {
    this.getNiveles();
  }

  getNiveles(){
    this.nivelService.getNivel().subscribe( response=>{
      this.niveles = response.data;
      console.log("recuperacion de niveles");
      console.log(this.niveles);
      console.log("fin de recuperación de niveles");
  }, error => {
    this.error = error; 

  });
  }

  public save():void{
    if (this.seccionForm.valid){
      this.activeModal.close(this.seccionForm.value);
    }
  }

}
