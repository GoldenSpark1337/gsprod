import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IMessage } from '../models/message';
import { IPagination } from '../models/pagination';

@Injectable({providedIn: 'root'})
export class MessageService {
    baseUrl = environment.apiUrl + "messages";
    private messages: IMessage[] = [];

    constructor(private http: HttpClient) { }
    
    getMessages(pageNumber, pageSize, container?) {
        let params = new HttpParams();

        params = params.append("Container", container);
        params = params.append("pageIndex", pageNumber.toString());
        params = params.append("pageSize", pageSize.toString());

        if (this.messages.length > 0) return of(this.messages);
        return this.http.get<IPagination<IMessage>>(this.baseUrl, {observe: 'response', params}).pipe(
            map((messages) => {
                this.messages = messages.body.data;
                return messages.body.data;
            })
        );
    }

    getMessageThread(username: string) {
        return this.http.get<IMessage[]>(this.baseUrl + "/thread/" + username);
    }

    sendMessage(username: string, content: string) {
        return this.http.post<IMessage>(this.baseUrl, {recipientUsername: username, content});
    }

    deleteMessage(id: number) {
        return this.http.delete(this.baseUrl + "/id");
    }
}