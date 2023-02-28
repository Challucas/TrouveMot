import { Injectable } from '@angular/core';
import { Mots } from './mots/model/mots';

@Injectable({
  providedIn: 'root'
})
export class DonneesMotusService {

  constructor() {  }
  mot1 = new Mots("SALADE");
  mot2 = new Mots("HUMOUR");
  mot3 = new Mots("FOUDRE");
  mot4 = new Mots("NOMBRE");
  lstMots : Mots[] = [
    this.mot1,
    this.mot2,
    this.mot3,
    this.mot4
  ];

  getList(){
    return this.lstMots;
  }
}
