import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { saveAs } from 'file-saver';

@Injectable({
    providedIn: 'root',
})
export class ExportService {
    private apiUrl = 'http://localhost:3000/pdf';

    constructor(private http: HttpClient) {}

    downloadPdf(reportName: string): Observable<Blob> {
        return this.http.get(`${this.apiUrl}?rep=${reportName}`, {
            responseType: 'blob',
        });
    }

    savePdf(reportName: string): void {
        this.downloadPdf(reportName).subscribe((blob) => {
            saveAs(blob, `${reportName}.pdf`);
        });
    }
}
