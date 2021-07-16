import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Grado } from '../../model/grado';
import { Nivel} from '../../../nivel/model/nivels';
import {NivelsService} from '../../../../../providers/nivels/nivels.service';
import { GradoService } from 'src/providers/grado/grado.service';
import { GradoNewComponent } from '../../components/forms/grado-new/grado-new.component';
import { GradoEditComponent } from '../../components/forms/grado-edit/grado-edit.component';
import { element } from 'protractor';

@Component({
  selector: 'app-grado',
  templateUrl: './grado.component.html',
  styleUrls: ['./grado.component.css']
})
export class GradoComponent implements OnInit {

  error:string;
  gradosf:Grado[];
  grado:Grado;
  nivel:Nivel;
  //@Input() nivel: Nivel;
  listaNiveles:Nivel[];
  array:Object[];

  constructor(private gradoService:GradoService, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.getGradoes();
    

  }

   getGradoes():void{
    
    this.gradoService.getGrado().subscribe(response =>{
    this.gradosf=response.data;
    for (let g of this.gradosf){  
      console.log("añslfjasdf");
      console.log(g.nivel_name.length);
      console.log(g.nom_grado);
      //this.listaNiveles.push(gg);
        
    }
    console.log("grados inicio");
    console.log(this.gradosf);
    console.log("grados inicio");

    this.gradoService.getNivel(4).subscribe(response=>{
      this.nivel=response.data;

      console.log("nivel inicio");
      console.log(this.nivel);
      console.log(this.nivel.nom_nivel);
      console.log("nivel final");
      //console.log("lista inicio");
      this.listaNiveles=[];
    this.listaNiveles.push(this.nivel)
    console.log(this.listaNiveles);
    
    console.log(this.listaNiveles);
    for (let g of this.listaNiveles){  
      console.log("añslfjasdf");
      console.log(g.nom_nivel);
      //this.listaNiveles.push(gg);
        
    }
    
    /*console.log(this.listaNiveles);
    console.log("lista fin");
      var ss:Object;
      //this.nivel
      console.log("inicio recuperar nivel");
      console.log(this.nivel);
      ss=this.nivel.nom_nivel;
      nom_nivel: this.nivel.nom_nivel,
      console.log(ss+"dd");
      console.log(this.nivel.nom_nivel);
      console.log("fin recuperar nivel");*/
      
      /*const gradosOfNivelForm=this.modalService.open(Prueba3Component,{size:'lg'});
      gradosOfNivelForm.componentInstance.title="Lista de grados";
      gradosOfNivelForm.componentInstance.grados=this.grados;
      console.log("inicio recuperar grados de nivel");
      console.log(this.grados);
      console.log("fin recuperar grados de nivel");*/
    });
    
    for (let g of this.gradosf){  
      let gg=this.searchNivelOfGrado(g.id)
      //console.log(gg);
      //this.listaNiveles.push(gg);
        
    }
    
    
    
    }, error =>{
      this.error=error
    });
  }

  public onNewGrado($event):void{
    if($event){
      const gradoForm=this.modalService.open(GradoNewComponent,{size:'lg'});
      gradoForm.componentInstance.title='New Grado';
      gradoForm.result.then((result)=>{
        this.gradoService.postGrado(result).subscribe(response=>{
          if(response.success){
            this.getGradoes();
          }
        }, error=>{
          this.error=error
        });
      });
    }
  }

  public editGrado(id:number):void{
    this.gradoService.getGradoById(id).subscribe(response=>{
      this.grado=response.data;
      const gradoForm=this.modalService.open(GradoEditComponent,{size:'lg'});
      gradoForm.componentInstance.title='Edit Grado';
      gradoForm.componentInstance.grado=this.grado;
      gradoForm.result.then((result)=>{
        if(result){
          this.gradoService.updateGrado(this.grado.id, result).subscribe(response=>{
            if (response.success){
              this.getGradoes();
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
  }

  public delete(id: number):void{
    this.gradoService.deleteGrado(id).subscribe(response=>{
      if(response.success){
        this.getGradoes();
        console.log('ffff');
      }
    }, error=>{
      this.error=error;
    });
  }

  searchNivelOfGrado(id:number){
    this.gradoService.getNivel(id).subscribe(response=>{
      this.nivel=response.data;
      //console.log("lista inicio");
    this.listaNiveles.push(this.nivel)
    
    /*console.log(this.listaNiveles);
    console.log("lista fin");
      var ss:Object;
      //this.nivel
      console.log("inicio recuperar nivel");
      console.log(this.nivel);
      ss=this.nivel.nom_nivel;
      nom_nivel: this.nivel.nom_nivel,
      console.log(ss+"dd");
      console.log(this.nivel.nom_nivel);
      console.log("fin recuperar nivel");*/
      
      /*const gradosOfNivelForm=this.modalService.open(Prueba3Component,{size:'lg'});
      gradosOfNivelForm.componentInstance.title="Lista de grados";
      gradosOfNivelForm.componentInstance.grados=this.grados;
      console.log("inicio recuperar grados de nivel");
      console.log(this.grados);
      console.log("fin recuperar grados de nivel");*/
    });
    
    return this.nivel;
    console.log("retornado");

  }

  

}
