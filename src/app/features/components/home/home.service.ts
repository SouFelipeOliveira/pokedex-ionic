import { Injectable } from '@angular/core';
import { PokedexService } from '../../shared/data-access/api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private PokedexService: PokedexService) { }

  pokemonCard$ = this.PokedexService.getPokemons();
  pokemonDetails$: any;

  getPokemonCardClick(pokemonId: number) {
    this.pokemonDetails$ = this.PokedexService.getPokemonDetails(pokemonId);
  }
}
