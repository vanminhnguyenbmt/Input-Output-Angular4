import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { ResetComponent } from './components/reset/reset.component';
import { ResultComponent } from './components/result/result.component';
import { SizeSettingComponent } from './components/size-setting/size-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    ResetComponent,
    ResultComponent,
    SizeSettingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
