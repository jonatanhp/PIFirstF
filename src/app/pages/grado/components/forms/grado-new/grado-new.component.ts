import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { NivelsService } from 'src/providers/nivels/nivels.service';
import { Nivel } from 'src/app/pages/nivel/model/nivels';

@Component({
  selector: 'app-grado-new',
  templateUrl: './grado-new.component.html',
  styleUrls: ['./grado-new.component.css']
})
export class GradoNewComponent implements OnInit {
  
  gradoForm:FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object>=new EventEmitter();
  niveles:Nivel[];
  error:String;
  

  constructor(private formBuilder:FormBuilder, public activeModal: NgbActiveModal, private nivelService:NivelsService) { 
    this.gradoForm=this.formBuilder.group({
      nom_grado:['',[Validators.required]],
      desc_grado:['',[Validators.required]],
      nivel_id:['',[Validators.required]]
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
    if (this.gradoForm.valid){
      this.activeModal.close(this.gradoForm.value);
    }
  }

}
