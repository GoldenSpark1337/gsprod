import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SearchParamsService {
    private searchParams = new ReplaySubject<string>();

    constructor() { }
    
    loadSearchParams(sender: string) {
        this.searchParams.next(sender);
    }

    getSearchParams() {
        return this.searchParams.asObservable();
    }
}