import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../jsonplaceholder.service';
import { JsonPlaceholder } from '../jsonplaceholder.model';
import { Subject, takeUntil } from 'rxjs';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'app-report1',
    standalone: true,
    imports: [TableModule],
    templateUrl: './report1.component.html',
    styleUrl: './report1.component.css',
})
export class Report1Component implements OnInit, OnDestroy {
    service = inject(JsonplaceholderService);
    posts = [] as JsonPlaceholder[];
    stop$ = new Subject<void>();

    ngOnInit(): void {
        this.service
            .getPosts()
            .pipe(takeUntil(this.stop$))
            .subscribe((data: JsonPlaceholder[]) => {
                console.log(data);
                this.posts = data;
            });
    }

    ngOnDestroy(): void {
        this.stop$.next();
        this.stop$.complete();
    }
}
