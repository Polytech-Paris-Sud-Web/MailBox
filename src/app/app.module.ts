import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ScanComponent } from './scan/scan.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import { ListArticleComponent } from './list-article/list-article.component';

import {NgxBarcodeScannerModule} from '../barcode-scanner/src/lib/ngx-barcode-scanner.module';



const appRoutes: Routes = [
  { path: 'listArticle', component: ListArticleComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'scan', component: ScanComponent },
  { path: '', component: AppComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ScanComponent,
    ArticleComponent,
    ListArticleComponent
  ],
  imports: [
    BrowserModule,
    NgxBarcodeScannerModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
