import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mots',
  templateUrl: './mots.component.html',
  styleUrls: ['./mots.component.css']
})
export class MotsComponent {
  @Output() sendRequestToFather = new EventEmitter();
  motTest = '';
  sendMot(input: any)
  {
    this.motTest = input;
    this.sendRequestToFather.emit(this.motTest);
  }
}
