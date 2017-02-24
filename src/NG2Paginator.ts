import {Component, Input, SimpleChange, OnChanges, Optional} from "@angular/core";
import {NG2DataTable, PageEvent} from "./NG2DataTable";

@Component({
    selector: "mfPaginator",
    template: `<ng-content></ng-content>`
})
export class NG2Paginator implements OnChanges {

    @Input("mfTable") inputMfTable: NG2DataTable;

    private mfTable: NG2DataTable;

    public activePage: number;
    public rowsOnPage: number;
    public dataLength: number = 0;
    public lastPage: number;

    public constructor(@Optional() private injectMfTable: NG2DataTable) {
    }

    public ngOnChanges(changes: {[key: string]: SimpleChange}): any {
        this.mfTable = this.inputMfTable || this.injectMfTable;
        this.onPageChangeSubscriber(this.mfTable.getPage());
        this.mfTable.onPageChange.subscribe(this.onPageChangeSubscriber);
    }

    public setPage(pageNumber: number): void {
        this.mfTable.setPage(pageNumber, this.rowsOnPage);
    }

    public setRowsOnPage(rowsOnPage: number): void {
        this.mfTable.setPage(this.activePage, rowsOnPage);
    }

    private onPageChangeSubscriber = (event: PageEvent)=> {
        this.activePage = event.activePage;
        this.rowsOnPage = event.rowsOnPage;
        this.dataLength = event.dataLength;
        this.lastPage = Math.ceil(this.dataLength / this.rowsOnPage);
    };
}