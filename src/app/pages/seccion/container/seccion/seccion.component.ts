import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Seccion } from '../../model/seccion';
import { Grado } from 'src/app/pages/grado/model/grado';
import { Nivel } from 'src/app/pages/nivel/model/nivels';
import { SeccionService } from 'src/providers/seccion/seccion.service';
import { GradoService } from 'src/providers/grado/grado.service';
import { NivelsService } from 'src/providers/nivels/nivels.service';
import { SeccionNewComponent } from '../../components/forms/seccion-new/seccion-new.component';
import { NbSelectModule } from '@nebular/theme';


@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})



export class SeccionComponent implements OnInit {

  error:string;
  grados:Grado[];
  grado:Grado;
  nivel:Nivel;
  //@Input() nivel: Nivel;
  niveles:Nivel[];
  array:Object[];
  seccion:Seccion;
  secciones:Seccion[];

  constructor(private gradoService:GradoService, private modalService:NgbModal, private nivelService:NivelsService, private seccionService:SeccionService) { }

  ngOnInit(): void {
    this.getSecciones();
    this.getListNivelesToSeccion();
  }

  getListNivelesToSeccion():void{
    
    this.nivelService.getNivel().subscribe(response =>{
    this.niveles=response.data;
    console.log(this.niveles);
    }, error =>{
      this.error=error
    });
  }

  getSecciones():void{
    
    this.seccionService.getSeccion().subscribe(response =>{
    this.secciones=response.data;
    console.log(this.secciones);
    }, error =>{
      this.error=error
    });
  }

  public onNewSeccion($event):void{
    if($event){
      const nivelForm=this.modalService.open(SeccionNewComponent,{size:'lg'});
      nivelForm.componentInstance.title='New Nivel';
      nivelForm.result.then((result)=>{
        this.seccionService.postSeccion(result).subscribe(response=>{
          if(response.success){
            this.getSecciones();
          }
        }, error=>{
          this.error=error
        });
      });
    }
  }

  /*editNivel(id:number):void{
    this.nivelService.getNivelById(id).subscribe(response=>{
      this.nivel=response.data;
      console.log("hola");
      console.log(this.nivel.nom_nivel);
      console.log("hola fin");
      const nivelForm=this.modalService.open(NivelEditComponent,{size:'lg'});
      nivelForm.componentInstance.title='Edit Nivel';
      nivelForm.componentInstance.nivel=this.nivel;
      nivelForm.result.then((result)=>{
        if(result){
          this.nivelService.updateNivel(this.nivel.id, result).subscribe(response=>{
            if (response.success){
              this.getNiveles();
            }
          }, error=>{
            this.error=error;
          });
        }
        console.log(result);
      });
    }, error=>{
      this.error=error;
    })
  }*/

  /*searchGradosOfNivel(id:number):void{
    this.nivelService.getGrados(id).subscribe(response=>{
      this.grados=response.data;

      for (let g of this.grados){  
        console.log("añslfjasdf");
        console.log(g.nom_grado);
        //this.listaNiveles.push(gg);
          
      }
      const gradosOfNivelForm=this.modalService.open(Prueba3Component,{size:'lg'});
      gradosOfNivelForm.componentInstance.title="Lista de grados";
      gradosOfNivelForm.componentInstance.grados=this.grados;
      console.log("inicio recuperar grados de nivel");
      console.log(this.grados);
      for (let g of this.grados){  
        console.log("añslfjasdf");
        console.log(g.nom_grado);
        //this.listaNiveles.push(gg);
          
      }
      
      console.log("fin recuperar grados de nivel");
    });

  }*/

  public delete(id: number):void{
    this.seccionService.deleteSeccion(id).subscribe(response=>{
      if(response.success){
        this.getSecciones();
        console.log('ffff');
      }
    }, error=>{
      this.error=error;
    });
  }

}
