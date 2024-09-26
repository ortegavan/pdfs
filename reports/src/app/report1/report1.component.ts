import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
    selector: 'app-report1',
    standalone: true,
    imports: [ButtonModule, MenuModule, StyleClassModule],
    templateUrl: './report1.component.html',
    styleUrl: './report1.component.css',
})
export class Report1Component {
    items: any[] = [];
}
