import { NamedAPIResource, APIResource, Name } from './Shared.models';

/**
 * The internal id and version of an API resource
 */
export interface VersionGameIndex {
  /** The internal id of an API resource within game data */
  game_index: number;
  /** The version relevent to this game index */
  version: NamedAPIResource;
}

/**
 * ## Pokemon
 * Pokémon are the creatures that inhabit the world of the Pokémon games.
 * They can be caught using Pokéballs and trained by battling with other Pokémon.
 * Each Pokémon belongs to a specific species but may take on a variant
 * which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings.
 * - See Bulbapedia for greater detail.
 */
export interface Pokemon {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** The base experience gained for defeating this Pokémon */
  base_experience: number;
  /** The height of this Pokémon in decimetres */
  height: number;
  /** Set for exactly one Pokémon used as the default for each species */
  is_default: boolean;
  /** Order for sorting. Almost national order, except families are grouped together */
  order: number;
  /** The weight of this Pokémon in hectograms */
  weight: number;
  /** A list of abilities this Pokémon could potentially have */
  abilities: PokemonAbility[];
  /** A list of forms this Pokémon can take on */
  forms: NamedAPIResource[];
  /** A list of game indices relevent to Pokémon item by generation */
  game_indices: VersionGameIndex[];
  /** A list of items this Pokémon may be holding when encountered */
  held_items: PokemonHeldItem[];
  /** A link to a list of location areas, as well as encounter details pertaining to specific versions */
  location_area_encounters: string;
  /** A list of moves along with learn methods and level details pertaining to specific version groups */
  moves: PokemonMove[];
  /**
   * A set of sprites used to depict this Pokémon in the game.
   * A visual representation of the various sprites can be found at PokeAPI/sprites on GitHub.
   */
  sprites: PokemonSprites;
  /** The species this Pokémon belongs to */
  species: NamedAPIResource;
  /** A list of base stat values for this Pokémon */
  stats: PokemonStat[];
  /** A list of details showing types this Pokémon has */
  types: PokemonType[];
  /** Data describing a Pokemon's types in a previous generation. */
  past_types: PokemonPastType[];
}

/**
 * Abilities the given pokémon could potentially have
 */
export interface PokemonAbility {
  /** Whether or not this is a hidden ability */
  is_hidden: boolean;
  /** The slot this ability occupies in this Pokémon species */
  slot: number;
  /** The ability the Pokémon may have */
  ability: NamedAPIResource;
}

/**
 * Details showing types the given Pokémon has
 */
export interface PokemonType {
  /** The order the Pokémon's types are listed in */
  slot: number;
  /** The type the referenced Pokémon has */
  type: NamedAPIResource;
}

/**
 * Data describing a Pokemon's types in a previous generation.
 */
export interface PokemonPastType {
  /** The generation of this Pokémon Type. */
  generation: NamedAPIResource;
  /** Types this of this Pokémon in a previous generation. */
  types: PokemonType[];
}

/**
 * Items the given Pokémon may be holding when encountered
 */
export interface PokemonHeldItem {
  /** The item the referenced Pokémon holds */
  item: NamedAPIResource;
  /** The details of the different versions in which the item is held */
  version_details: PokemonHeldItemVersion[];
}

/**
 * The version-specific details of a held item
 */
export interface PokemonHeldItemVersion {
  /** The version in which the item is held */
  version: NamedAPIResource;
  /** How often the item is held */
  rarity: number;
}

/**
 * A move along with learn method and level details pertaining to specific version groups
 */
export interface PokemonMove {
  /** The move the Pokémon can learn */
  move: NamedAPIResource;
  /** The details of the version in which the Pokémon can learn the move */
  version_group_details: PokemonMoveVersion[];
}

/**
 * The details of the version in which the Pokémon can learn a given move
 */
export interface PokemonMoveVersion {
  /** The method by which the move is learned */
  move_learn_method: NamedAPIResource;
  /** The version group in which the move is learned */
  version_group: NamedAPIResource;
  /** The minimum level to learn the move */
  level_learned_at: number;
}

/**
 * A base stat value for a Pokémon
 */
export interface PokemonStat {
  /** The stat the Pokémon has */
  stat: NamedAPIResource;
  /** The effort points (EV) the Pokémon has in the stat */
  effort: number;
  /** The base value of the stat */
  base_stat: number;
}

export interface PokemonColor {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** The name of this resource listed in different languages */
  names: Name[];
  /** A list of the Pokémon species that have this color */
  pokemon_species: NamedAPIResource[];
}

/**
 * A set of sprites used to depict a Pokémon in the game.
 * Only front_default is guaranteed to be present; all others may be null
 * depending on the Pokémon and game version.
 */
export interface PokemonSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other?: {
    dream_world?: {
      front_default: string | null;
      front_female: string | null;
    };
    home?: {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    'official-artwork'?: {
      front_default: string | null;
      front_shiny?: string | null;
    };
    showdown?: {
      back_default: string | null;
      back_female: string | null;
      back_shiny: string | null;
      back_shiny_female: string | null;
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
  };
  versions?: {
    'generation-i'?: {
      'red-blue'?: GenerationISprites;
      yellow?: GenerationISprites;
    };
    'generation-ii'?: {
      crystal?: GenerationIISprites;
      gold?: GenerationIISprites;
      silver?: GenerationIISprites;
    };
    'generation-iii'?: {
      emerald?: { front_default: string | null; front_shiny: string | null };
      'firered-leafgreen'?: GenerationIISprites;
      'ruby-sapphire'?: GenerationIISprites;
    };
    'generation-iv'?: {
      'diamond-pearl'?: GenerationIVSprites;
      'heartgold-soulsilver'?: GenerationIVSprites;
      platinum?: GenerationIVSprites;
    };
    'generation-v'?: {
      'black-white'?: GenerationIVSprites & {
        animated?: GenerationIVSprites;
      };
    };
    'generation-vi'?: {
      'omegaruby-alphasapphire'?: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      'x-y'?: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
    };
    'generation-vii'?: {
      icons?: { front_default: string | null; front_female: string | null };
      'ultra-sun-ultra-moon'?: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
    };
    'generation-viii'?: {
      icons?: { front_default: string | null; front_female: string | null };
    };
  };
}

interface GenerationISprites {
  back_default: string | null;
  back_gray: string | null;
  back_transparent?: string | null;
  front_default: string | null;
  front_gray: string | null;
  front_transparent?: string | null;
}

interface GenerationIISprites {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
  back_female?: string | null;
  back_shiny_female?: string | null;
  front_female?: string | null;
  front_shiny_female?: string | null;
}

interface GenerationIVSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}