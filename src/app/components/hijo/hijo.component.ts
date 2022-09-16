import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

import { ICards } from 'src/app/interfaces/images.interface';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
  @Input('data') user: any;
  @Output() addToCard = new EventEmitter<ICards>();

  constructor() { }

  ngOnInit(): void {
  }

  cambiar(){
    this.addToCard.emit(this.user)
}
}
