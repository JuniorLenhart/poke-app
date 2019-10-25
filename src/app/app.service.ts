import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class AppService {

  constructor(private titleService: Title) { }

  set pageTitle(value: string) {
    this.titleService.setTitle(`${value} - pokeApp`);
  }

}
