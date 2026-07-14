import { Pokemon } from './../models/pokemon.models';
import { httpResource } from '@angular/common/http';
import { Service, signal } from '@angular/core';

@Service()
export class AppService {

    pokemonName = signal('Pikachu')
    pokemon = httpResource<Pokemon>(() => 'https://pokeapi.co/api/v2/pokemon/' + this.pokemonName())

    constructor() {
        setTimeout(() => {
            this.pokemonName.set('Eevee')
        }, 2000);
    }

}
