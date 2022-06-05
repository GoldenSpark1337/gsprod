import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IKey } from '../models/key';

@Injectable({providedIn: 'root'})
export class KeyService {
    private baseUrl: string = environment.apiUrl + "key/";
    private keys: IKey[] = [];

    constructor(private http: HttpClient) { }
    
    getKeys() {
        if (this.keys.length > 0) return of(this.keys);
        return this.http.get<IKey[]>(this.baseUrl).pipe(
            map((keys) => {
                return this.keys = keys;
            })
        );
    }

    getKey(id: number) {
        const genre = this.keys.find(x => x.id === id);
        if (genre !== undefined) return of(genre);
        return this.http.get<IKey>(this.baseUrl + `${id}`);
    }
    
}