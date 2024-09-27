import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DownloadComponent } from './download/download.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, DownloadComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'Angular Client';
}
