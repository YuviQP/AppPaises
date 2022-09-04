import { Component, OnInit } from '@angular/core';
import { Capital } from '../../interfaces/capital-interface';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {
  termino:string='';
  hayError:boolean=false;
  paises:Country[]=[];
  constructor(private paisService:PaisService ) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.hayError=false;
    this.termino=termino;
    console.log(this.termino)
    this.paisService.buscarCapital(this.termino).subscribe(
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
