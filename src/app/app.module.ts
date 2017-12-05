import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SystemJsNgModuleLoader } from '@angular/core';
import { AppComponent } from './app.component';
import { WidgetContainerComponent } from './widget-container/widget-container.component';
import { Widget1 } from './widget-1';
import { Widget2 } from './widget-2';
import { Widget3 } from './widget-3';

@NgModule({
  declarations: [
    AppComponent,
    WidgetContainerComponent,
    Widget1,
    Widget2,
    Widget3
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent],
  providers: [SystemJsNgModuleLoader],
  entryComponents: [Widget1, Widget2, Widget3]
})
export class AppModule { }
