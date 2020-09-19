import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';
import { GraphComponent } from './graph/graph.component';
import { graphService } from './graph/graph.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateComponent } from './date/date.component';
import { DateService } from './date/date.service';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule.forRoot([
      {
        path: '',
        component: GraphComponent 
      },
      {
        path: 'date',
        component: DateComponent 
      }
    ]) 
  ],
  providers: [
    graphService,
    DateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
