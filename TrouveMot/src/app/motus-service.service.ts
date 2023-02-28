import { Injectable } from '@angular/core';
import { Mots } from './mots/model/mots';

@Injectable({
  providedIn: 'root'
})
export class MotusServiceService {

  constructor() { }

  lettreMot: string[] = [];
  lettreRandomMot: string[] = [];
  bgColor= 'grey';
  couleurLettre: string[] = [];
  cpt = 0;

  checkMot(randomMot: any, motFils: string)
  {
    this.couleurLettre = []
    this.lettreRandomMot = randomMot.mot.split('');
    this.lettreMot = motFils.split('');
    for(let i = 0; i < this.lettreMot.length; i++)
    {
      if(randomMot.mot.includes(this.lettreMot[i]))
      {
        if(this.lettreMot[i] == this.lettreRandomMot[i])
        {
          this.bgColor= 'green';
          this.couleurLettre.push(this.bgColor);
        }
        else
        {
          this.bgColor = 'yellow';
          this.couleurLettre.push(this.bgColor);
        }
      }
      else
      {
        this.bgColor = 'red';
        this.couleurLettre.push(this.bgColor);
      }
    }
    this.cpt += 1;
    return this.couleurLettre;
  }
}
