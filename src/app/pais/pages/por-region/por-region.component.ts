import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { Region } from '../../interfaces/region-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {
  termino:string='';
  hayError:boolean=false;
  paises:Country[]=[];

  constructor( private paisService:PaisService) { }

  ngOnInit(): void {
  }
  buscar(termino:string){
    this.hayError=false;
    this.termino=termino;
    console.log(this.termino)
    this.paisService.buscarRegion(this.termino).subscribe(
      resp=>{
        this.paises=resp;
      },(err)=>{
        this.hayError=true;
      }
    );

  }

  sugerencias(termino:string){
    this.hayError=false;
  }

}
