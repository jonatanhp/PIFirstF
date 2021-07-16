import { Component, EventEmitter, Input, OnInit, Output,OnDestroy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
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
  private destroy$: Subject<void> = new Subject<void>();
  @Output() onDeleted = new EventEmitter<boolean>();
  @Input() index: number = 0;
  private nivel: any;

  constructor(private formBuilder:FormBuilder, public activeModal: NgbActiveModal, private nivelService:NivelsService) { 
    this.gradoForm=this.formBuilder.group({
      nom_grado:['',[Validators.required]],
      desc_grado:['',[Validators.required]],
      nivel_id:['',[Validators.required]]
    });
  }

  ngOnInit(): void {
    this.subscribeForms();
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


  private subscribeForms() {

    // this.personaForm.get('ubigeo_pais_id').valueChanges
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(res => {
    //     this.getDepartamentos();
    //   });

    this.gradoForm.get('nivel_id')?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.getNiveles();
      });

    

  }


  private patchForm() {
    this.gradoForm.patchValue({
      id: this.nivel.id,
      nom_nivel: this.nivel.nom_nivel,
      desc_nivel: this.nivel.desc_nivel,
     
      
    });
    console.log(this.nivel);

  

  }



  public save():void{
    if (this.gradoForm.valid){
      this.activeModal.close(this.gradoForm.value);
    }
  }

}
