import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { IrmDffModule } from '../../../irm-dff/src/public-api';
import { IrmDffModule } from 'irm-dff';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IrmDffModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
