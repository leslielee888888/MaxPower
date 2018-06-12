import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ContentLayoutComponent } from './layouts/content/content-layout.component';
import { FullLayoutComponent } from './layouts/full/full-layout.component';
// import { HorizontalLayoutComponent } from "./layouts/horizontal/horizontal-layout.component";
import { HttpService } from './service/http.service';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import * as $ from 'jquery';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaxpowerReducerModule } from './maxpower-reducer/maxpower-reducer.module';
import { MaxpowerUtilsModule } from './maxpower-utils/maxpower-utils.module';
// export function createTranslateLoader(http: HttpClient) {
//     return new TranslateHttpLoader(http, './assets/i18n/', '.json');
//   }

@NgModule({
    declarations: [
        AppComponent,
        FullLayoutComponent,
        // HorizontalLayoutComponent,
        ContentLayoutComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        // StoreModule.forRoot({}),
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        NgbModule.forRoot(),
        MaxpowerReducerModule,
        MaxpowerUtilsModule
        // TranslateModule.forRoot({
        //     loader: {
        //         provide: TranslateLoader,
        //         useFactory: (createTranslateLoader),
        //         deps: [HttpClient]
        //       }
        // }),
        /*  AgmCoreModule.forRoot({
             apiKey: 'AIzaSyBr5_picK8YJK7fFR2CPzTVMj6GG1TtRGo'
         }) */
    ],
    providers: [
        // Toastr and auth providers
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        // { provide: ToastOptions, useClass: CustomOption },
        HttpService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
