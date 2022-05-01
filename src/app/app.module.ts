import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from 
    '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MaterialComponent } from './material/material.component';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './input/input.component';
const routes: Routes = [
  { path: 'input', component: InputComponent },
  { path: 'material', component: MaterialComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    InputComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
