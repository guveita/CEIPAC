import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from "./app.routing";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';
import { Test3Component } from './components/test3/test3.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { Formulario2Component } from './components/formulario2/formulario2.component';
import { FooterComponent } from './components/footer/footer.component';
import { Footer2Component } from './components/footer2/footer2.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { Inicio2Component } from './components/inicio2/inicio2.component';
import { Titulo1Component } from './components/titulo1/titulo1.component';
import { AdmisionComponent } from './components/admision/admision.component';
import { FamiliaComponent } from './components/familia/familia.component';
import { CardsComponent } from './components/cards/cards.component';
import { FilosofiaComponent } from './components/filosofia/filosofia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestComponent,
    Test2Component,
    Test3Component,
    FormularioComponent,
    Formulario2Component,
    FooterComponent,
    Footer2Component,
    InicioComponent,
    Inicio2Component,
    Titulo1Component,
    AdmisionComponent,
    FamiliaComponent,
    CardsComponent,
    FilosofiaComponent,
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
