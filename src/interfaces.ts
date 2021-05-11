export interface GenerationData {
    name: string;
    names: GenerationNameData[];
    id: number;
    main_region: AditionalInfo;
    moves: AditionalInfo[];
    pokemon_species: AditionalInfo[];
    types: AditionalInfo[];
    version_groups: AditionalInfo[]
}

export interface GenerationNameData {
    language: LanguageData;
    name: string;
}

export interface PokemonNameData {
    language: LanguageData;
    name: string;
}

export interface LanguageData {
    name: string;
}

export interface AditionalInfo {
    name: string;
    url: string;
}
