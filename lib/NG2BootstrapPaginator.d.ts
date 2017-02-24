import { OnChanges } from "@angular/core";
import { NG2DataTable } from "./NG2DataTable";
export declare class NG2BootstrapPaginator implements OnChanges {
    rowsOnPageSet: any[];
    mfTable: NG2DataTable;
    minRowsOnPage: number;
    ngOnChanges(changes: any): any;
}
