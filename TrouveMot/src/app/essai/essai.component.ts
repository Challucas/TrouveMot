import { Component } from '@angular/core';

import { DonneesMotusService } from '../donnees-motus.service';
import { Mots } from '../mots/model/mots';
import { MotusServiceService } from '../motus-service.service';

@Component({
  selector: 'app-essai',
  templateUrl: './essai.component.html',
  styleUrls: ['./essai.component.css']
})
export class EssaiComponent {

  randomMot: any;
  lstMots: any;
  constructor(public motusService: MotusServiceService, public donnesServices: DonneesMotusService) {
    this.lstMots = this.donnesServices.getList();
    this.randomMot = this.lstMots[Math.floor(Math.random() * this.lstMots.length)]
  }
}
