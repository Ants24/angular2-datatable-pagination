import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {NG2DataTable} from "./NG2DataTable";
import {NG2DefaultSorter} from "./NG2DefaultSorter";
import {NG2Paginator} from "./NG2Paginator";
import {NG2BootstrapPaginator} from "./NG2BootstrapPaginator";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        NG2DataTable,
        NG2DefaultSorter,
        NG2Paginator,
        NG2BootstrapPaginator
    ],
    exports: [
        NG2DataTable,
        NG2DefaultSorter,
        NG2Paginator,
        NG2BootstrapPaginator
    ]
})
export class NG2DataTableModule {

}