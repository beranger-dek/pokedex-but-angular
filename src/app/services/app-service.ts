import { Pokemon } from './../models/pokemon.models';
import { PokemonSpecies } from 'pokenode-ts';
import { Generation } from './../models/game.models';
import { httpResource } from '@angular/common/http';
import { Service, signal } from '@angular/core';

@Service()
export class AppService {

    pokemonName = signal('Pikachu')
    pokemon = httpResource<Pokemon>(() => 'https://pokeapi.co/api/v2/pokemon/' + this.pokemonName())

    pokemonSpecies = httpResource<PokemonSpecies>(() => {
        const species = this.pokemon.value()?.species;
        return species ? species.url : undefined; // undefined = don't fetch yet
    });
    pokemonGeneration = httpResource<Generation>(() => {
        const generation = this.pokemonSpecies.value()?.generation;
        return generation ? generation.url : undefined;
    });

}
