import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IVst } from '../models/vst';

@Injectable({
  providedIn: 'root'
})
export class VstService {
  private baseUrl = environment.apiUrl + "vst/";
  public vsts: IVst[] = [];

  constructor(private http: HttpClient) { }

  getVsts() {
    if (this.vsts.length > 0) return of(this.vsts); 
    return this.http.get<IVst[]>(this.baseUrl).pipe(
      map(vsts => {
        this.vsts = vsts;
        return vsts;
      })
    );
  }

  getVst(id: number) {
    const vst = this.vsts.find(x => x.id === id);
    if (vst !== undefined) return of(vst);
    return this.http.get<IVst>(this.baseUrl + `${id}`);
  }
}
