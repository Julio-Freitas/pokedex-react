export interface ISpriteVerions {
  'generation-v': {
    'black-white': {
      animated: {
        front_default: string;
      };
    };
  };
}

export interface IPokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface IPokemonsSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  versions: ISpriteVerions;
}

export interface IPokemon {
  name: string;
  url?: string;
  sprites?: IPokemonsSprites;
  types: IPokemonType[];
  error?: boolean;
}

export interface IPokemonFetch {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: IPokemon[];
  error: boolean;
}
