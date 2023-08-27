import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {FirstComponentComponent} from './components/first-component/first-component.component';
import {TesteComponent} from './components/teste/teste.component';
import {AnimalComponent} from './components/animal/animal.component';
import {PipesComponent} from './components/pipes/pipes.component';
import {TwoWayBidingComponent} from './components/two-way-biding/two-way-biding.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    TesteComponent,
    AnimalComponent,
    PipesComponent,
    TwoWayBidingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
