import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [MenuModule, CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
    router = inject(Router);
    items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {
                label: 'Navigate',
                items: [
                    {
                        label: 'Report 1',
                        icon: 'pi pi-file',
                        command: () => {
                            this.router.navigate(['/report1']);
                        },
                    },
                    {
                        label: 'Report 2',
                        icon: 'pi pi-file',
                        command: () => {
                            this.router.navigate(['/report2']);
                        },
                    },
                ],
            },
        ];
    }
}
