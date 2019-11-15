import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Prueba2Service } from './services/prueba2.service';
import { PicomponentComponent } from './picomponent/picomponent.component';

//en el appmodule general agregar los servicios en providers y el httpclient en imports y providers

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    MenuComponent,
    PicomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [HttpClient, Prueba2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
