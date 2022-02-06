import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './helpers/filter-pipe.pipe';

import { appStoreProviders } from './app.store';
import { HttpClientModule } from '@angular/common/http';
import { MacbookService } from './services/macbook.service';
import { NgMacbookForDirectiveDirective } from './directives/ng-macbook-for-directive.directive';
import { MacbookFormComponent } from './components/macbook-form/macbook-form.component';
import { MacbooksComponent } from './components/macbook/macbook.component';
import { MacbookSearchComponent } from './components/macbook-search/macbook-search.component';
import { NgmacbookForDemoComponent } from './components/ng-macbook-for/ng-macbook-for.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MacbooksComponent,
    MacbookFormComponent,
    FilterPipePipe,
    MacbookSearchComponent,
    NgmacbookForDemoComponent,
    NgMacbookForDirectiveDirective,
  ],
  imports: [BrowserModule,
    FormsModule,
    ReactiveFormsModule, HttpClientModule],
  providers: [appStoreProviders, MacbookService],
  bootstrap: [AppComponent],
})
export class AppModule { }
