import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IGenre } from '../models/genre';

@Injectable({providedIn: 'root'})
export class GenreService {
    private baseUrl: string = environment.apiUrl + "genre/";
    private genres: IGenre[] = [];

    constructor(private http: HttpClient) { }
    
    getGenres() {
        if (this.genres.length > 0) return of(this.genres);
        return this.http.get<IGenre[]>(this.baseUrl).pipe(
            map((genres) => {
                return this.genres = genres;
            })
        );
    }

    getGenre(id: number) {
        const genre = this.genres.find(x => x.id === id);
        if (genre !== undefined) return of(genre);
        return this.http.get<IGenre>(this.baseUrl + `${id}`);
    }
}