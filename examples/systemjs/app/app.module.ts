import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {NG2DataTableModule} from "angular2-datatable-pagination";
import {HttpModule} from "@angular/http";
import {DataFilterPipe} from "./data-filter.pipe";
import {FormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component'
import { ServerComponent } from './server/server.component'
import {routes} from './route'

import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        NG2DataTableModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes,{useHash: true})
    ],
    declarations: [
        AppComponent,
        ClientComponent,
        ServerComponent,
        DataFilterPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}