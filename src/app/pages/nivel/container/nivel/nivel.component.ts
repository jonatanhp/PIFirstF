import { Component, OnInit } from '@angular/core';
import {NivelsService} from '../../../../../providers/nivels/nivels.service';
import {Nivel} from '../../model/nivels';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NivelNewComponent} from '../../components/forms/nivel-new/nivel-new.component';

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.component.html',
  styleUrls: ['./nivel.component.css']
})
export class NivelComponent implements OnInit {
  error:string;
  nivels:Nivel[];
  nivel:Nivel;

  constructor(private nivelService:NivelsService, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.getNiveles();
  }

  getNiveles():void{
    
    this.nivelService.getNivel().subscribe(response =>{
    this.nivels=response.data;
    console.log(this.nivels);
    }, error =>{
      this.error=error
    });
  }

  public onNewNivel($event):void{
    if($event){
      const nivelForm=this.modalService.open(NivelNewComponent,{size:'lg'});
      nivelForm.componentInstance.title='New Nivel';
      nivelForm.result.then((result)=>{
        this.nivelService.postNivel(result).subscribe(response=>{
          if(response.success){
            this.getNiveles();
          }
        }, error=>{
          this.error=error
        });
      });
    }
  }

  /*editNivel(id:bigint):void{
    this.nivelService.getNivelById(id).subscribe(response=>{
      this.nivels=response.data;
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

  public delete(id: number):void{
    this.nivelService.deleteNivel(id).subscribe(response=>{
      if(response.success){
        this.getNiveles();
        console.log('ffff');
      }
    }, error=>{
      this.error=error;
    });
  }

}
