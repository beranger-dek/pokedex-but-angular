import { Component, inject, signal } from '@angular/core';
import { AppService } from '../../services/app-service';
import { Loader } from "../../components/loader/loader";
import { TitleCasePipe } from '@angular/common';
import { PokemonClient } from 'pokenode-ts';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [Loader, TitleCasePipe, JsonPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  appService = inject(AppService);
  
  get animatedOrDefaultSprite(): string | null {
    return (
      this.appService.pokemon.value()!.sprites.versions?.['generation-v']?.['black-white']?.animated?.front_default ??
      this.appService.pokemon.value()!.sprites.front_default
    );
  }

  get pokemonColorClass(): string {
    const colorName = this.appService.pokemonSpecies.value()?.color.name;
    return colorName ? `color-${colorName}` : '';
}

  get region(): string {
    return this.appService.pokemonGeneration.value()?.main_region.name ?? '';
  }
  get japaneseName(): string {
    const names = this.appService.pokemonSpecies.value()?.names ?? [];
    return names.find(n => n.language.name === 'ja-Hrkt')?.name ?? '';
  }

}

