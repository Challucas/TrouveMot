import { Component } from '@angular/core';
import { DonneesMotusService } from './donnees-motus.service';
import { Mots } from './mots/model/mots';
import { MotusServiceService } from './motus-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  randomMot: any;
  lstMots: any;

  constructor(public motusService: MotusServiceService, public donnesServices: DonneesMotusService) {
    this.lstMots = this.donnesServices.getList();
    this.randomMot = this.lstMots[Math.floor(Math.random() * this.lstMots.length)]
  }

  checkMot(input: any)
  {
    this.motusService.checkMot(this.randomMot, input);
  }
}
