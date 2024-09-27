import { Component, inject } from '@angular/core';
import { ExportService } from '../export.service';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-download',
    standalone: true,
    imports: [ButtonModule],
    templateUrl: './download.component.html',
    styleUrl: './download.component.css',
})
export class DownloadComponent {
    exportService = inject(ExportService);

    download(report: string) {
        this.exportService.savePdf(report);
    }
}
