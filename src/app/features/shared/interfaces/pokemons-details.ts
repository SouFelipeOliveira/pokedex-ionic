export interface PokemonsDetails {
    id: number;
    name: string;
    image: string;
    weight: number;
    height: number;
    base_experience: number;
    types: {
        name: string;
    }[]
    abilities: {
        name: string;
        effect: string;
    }[]
}
