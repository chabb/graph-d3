import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { SettingsComponent } from '../components/settings/settings.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    NzCodeEditorModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {}
