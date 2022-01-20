import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  criteria: string = '';

  heroes: Heroe[] = [];

  selected: Heroe | undefined;

  constructor(private service: HeroesService) {}

  ngOnInit(): void {}

  search() {
    this.service
      .getHeroesFiltered(this.criteria)
      .subscribe((heroes) => (this.heroes = heroes));
  }

  selectedHeroe(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.selected = undefined;
      return;
    }
    const heroe: Heroe = event.option.value;
    this.criteria = heroe.superhero;

    this.service
      .getHeroeById(heroe.id!)
      .subscribe((heroe) => (this.selected = heroe));
  }
}
