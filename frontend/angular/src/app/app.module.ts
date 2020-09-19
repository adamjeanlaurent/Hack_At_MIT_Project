import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { GridComponent } from './components/grid/grid.component';
import { OrganizationComponent } from './components/organization/organization.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    GridComponent,
    OrganizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
