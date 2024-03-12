import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private url = environment.baseURL;
  private image = environment.imageURL;
  
  constructor(private http: HttpClient) { }

  getPokemons(offset = 0): Observable<any> {
    const endpoint = `${this.url}/pokemon?offset=${offset}&limit=25`;
    return this.http.get(endpoint).pipe(
     map((response: any ) => {
        return {
          results: response.results.map((poke: any, index: number) => {
            return {
              id: index + offset + 1,
              name: poke.name,
              image: this.getPokeImage(index + offset + 1)
            };
          })
        };
     })
    );
  }


  getPokeImage(index: number): string {
    return `${this.image}/${index}.png`;
  }
  
  getPokeName(index: number): Observable<string> {
    return this.http.get(`${this.url}/pokemon/${index}`).pipe(
      map((poke: any) => poke.name)
    );
  }

  search(pokemon: string): Observable<any> {
    return this.http.get(`${this.url}/pokemon/${pokemon}`).pipe(
      map((poke: any) => {
        poke.image = this.getPokeImage(poke.id);
        return poke;
      })
    );
  }


  getPokemonDetails(index: number): Observable<any> {
    return this.http.get(`${this.url}/pokemon/${index}`).pipe(
      map((details: any) => {
        return {
          id: details.id,
          name: details.name,
          weight: details.weight,
          height: details.height,
          base_experience: details.base_experience,
          types: details.types.map((type: any) => {
            return {
              name: type.type.name
            };
          }),
          abilities: details.abilities.map((abilityInfo: any) => {
            const abilityName = abilityInfo.ability.name;
            return this.http.get(abilityInfo.ability.url).pipe(
              map((abilityDetails: any) => {
                return {
                  name: abilityName,
                  effect: abilityDetails.effect_entries.find((entry: any) => entry.language.name === 'en').effect
                };
              })
            );
          })
        };
      })
    );
  }
}