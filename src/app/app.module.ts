import { MatInputModule } from '@angular/material/input';
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
import { FormComponent } from './form/form.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    DateComponent,
    FormComponent,
    UpdateComponent,
    ListComponent
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
        component: FormComponent 
      },
      {
        path: 'update/:id',
        component: UpdateComponent 
      },
      {
        path: 'list',
        component: ListComponent
      }
    ]),
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule

     
  ],
  providers: [
    graphService,
    DateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
