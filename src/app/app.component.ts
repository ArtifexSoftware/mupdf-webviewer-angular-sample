import { AfterViewInit, Component } from '@angular/core';
import { initMuPDFWebViewer } from 'mupdf-webviewer';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'mupdf-webviewer-angular-sample';

  ngAfterViewInit(): void {
    from(initMuPDFWebViewer(
      '#viewer',
      '/sample.pdf',
      {
        libraryPath: 'lib',
        licenseKey: 'YOUR_LICENSE_KEY',
      },
    ))
      .subscribe({
        next: mupdf => {
          /* Use API of MuPDF WebViewer to do something */
          mupdf.toast.show({ type: 'success', content: 'Document opened' });
          console.log('MuPDF WebViewer has successfully loaded.');
        }
      });
  }
}
