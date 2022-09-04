import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  pais!:Country;
  constructor(
    private activateRouter:ActivatedRoute,
    private paisService:PaisService,
    ) { }

  ngOnInit(): void {
    this.activateRouter.params
    .pipe(
      switchMap(({id})=>this.paisService.getPaisPorAlpha(id)),
      tap(console.log)
      )
    .subscribe(
      resp=>{
        this.pais=resp;
      }
    )
   /*this.activateRouter.params.subscribe(
      ({id})=>{
        this.paisService.getPaisPorAlpha(id).
        subscribe(pais=>{
          console.log(pais)
        })
      }
    )*/
  }

}
