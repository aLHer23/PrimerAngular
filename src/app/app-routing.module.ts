import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { PicomponentComponent } from './picomponent/picomponent.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {path: 'cuerpo', component: ContentComponent},
  {path: 'picomponent', component: PicomponentComponent},
  {path: 'menu', component: MenuComponent},
  {path: '**', component: ContentComponent}
];

//const routes: Routes = [{agregar los otros modulos. el path va a decir lo que se ve en la url path, component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
