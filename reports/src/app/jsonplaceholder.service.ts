import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPlaceholder } from './jsonplaceholder.model';

@Injectable({
    providedIn: 'root',
})
export class JsonplaceholderService {
    httpClient = inject(HttpClient);
    apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    getPosts(): Observable<JsonPlaceholder[]> {
        return this.httpClient.get<JsonPlaceholder[]>(this.apiUrl);
    }
}
