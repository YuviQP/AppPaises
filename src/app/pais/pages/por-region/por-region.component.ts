import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { Region } from '../../interfaces/region-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
  styles:[
  `  button{
    margin-right:5px;

  }`
  ]
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string='';
  paises:Country []=[];
  hayError:boolean=false;
  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}
  activarRegion(region:string){
  this.regionActiva=region;
  this.hayError=false;
  this.regionActiva=region;
  this.paisService.buscarRegion(this.regionActiva).subscribe(
    resp=>{
      this.paises=resp;
    },(err)=>{
      this.hayError=true;
    }
  );
  }

  getClaseCSS(region:string):String{
    return (region==this.regionActiva?'btn btn-primary':'btn btn-outline-primary')

  }
  buscar(region: string) {
    if(region==this.regionActiva){ return ;}
    this.hayError=false;
    this.regionActiva=region;
    this.paises=[];
    this.paisService.buscarRegion(this.regionActiva).subscribe(
      resp=>{
        this.paises=resp;
      },(err)=>{
        this.hayError=true;
      }
    );
  }

  sugerencias(termino: string) {}
}
