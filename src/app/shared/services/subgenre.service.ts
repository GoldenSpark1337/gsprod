import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ISubgenre } from '../models/subgenre';

@Injectable({providedIn: 'root'})
export class SubgenreService {
    private baseUrl = environment.apiUrl + "subgenres/";
    private subgenres: ISubgenre[] = [];

    constructor(private http: HttpClient) { }
    
    getSubgenres() {
        if (this.subgenres.length > 0) return of(this.subgenres);
        return this.http.get<ISubgenre[]>(this.baseUrl).pipe(
            map((subgenres) => {
                return this.subgenres = subgenres;
            })
        );
    }
    getSubgenre(id: number) {
        const subgenre = this.subgenres.find(x => x.id === id);
        if (subgenre !== undefined) return of(subgenre);
        return this.http.get<ISubgenre>(this.baseUrl + `${id}`);
    }
}