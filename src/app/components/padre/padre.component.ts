import { Component, OnInit } from '@angular/core';
import { ICards } from 'src/app/interfaces/images.interface';
import { tap } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})

export class PadreComponent implements OnInit {

  cards: ICards[] = []
  constructor(private _http: HttpClient) { }


  nombre: string = 'Sin nombre...';
  ngOnInit(){
    this._http.get('http://localhost:3000/images')
    .subscribe((datos: any) => this.cards = datos)
  }

  cambio(e:ICards){
    this.nombre = e.nameImage
  }
}
