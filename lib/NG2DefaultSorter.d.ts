import { OnInit } from "@angular/core";
import { NG2DataTable } from "./NG2DataTable";
export declare class NG2DefaultSorter implements OnInit {
    private mfTable;
    sortBy: string;
    isSortedByMeAsc: boolean;
    isSortedByMeDesc: boolean;
    constructor(mfTable: NG2DataTable);
    ngOnInit(): void;
    sort(): void;
}
