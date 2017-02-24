import { SimpleChange, OnChanges } from "@angular/core";
import { NG2DataTable } from "./NG2DataTable";
export declare class NG2Paginator implements OnChanges {
    private injectMfTable;
    inputMfTable: NG2DataTable;
    private mfTable;
    activePage: number;
    rowsOnPage: number;
    dataLength: number;
    lastPage: number;
    constructor(injectMfTable: NG2DataTable);
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): any;
    setPage(pageNumber: number): void;
    setRowsOnPage(rowsOnPage: number): void;
    private onPageChangeSubscriber;
}
