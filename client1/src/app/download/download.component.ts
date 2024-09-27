import { Component, inject } from '@angular/core';
import { ExportService } from '../export.service';

@Component({
    selector: 'app-download',
    standalone: true,
    imports: [],
    templateUrl: './download.component.html',
    styleUrl: './download.component.css',
})
export class DownloadComponent {
    exportService = inject(ExportService);

    download() {
        this.exportService.savePdf('report1');
    }
}
