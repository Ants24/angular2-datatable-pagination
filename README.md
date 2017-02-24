# angular2-datatable-pagination
fork from [angualr2-datatable](https://github.com/mariuszfoltak/angular2-datatable)  , server pagination  and client pagination


[![npm version](https://badge.fury.io/js/angular2-datatable-pagination.svg)](https://badge.fury.io/js/"angular2-datatable-pagination)
[![Build Status](https://travis-ci.org/ants24/angular2-datatable-pagination.svg?branch=master)](https://travis-ci.org/ants24/angular2-datatable-pagination)
[![npm downloads](https://img.shields.io/npm/dm/angular2-datatable-pagination.svg)](https://npmjs.org/angular2-datatable-pagination)
## Demo

Check [live demo](http://plnkr.co/edit/4AERPpfUDIvy6W1pwdCd?p=preview) in plunker

## Installation

```
npm i -S angular2-datatable-pagination
```

## Usage example

AppModule.ts
```typescript
import {NgModule} from "@angular/core";
...
import {NG2DataTableModule} from "angular2-datatable-pagination";

@NgModule({
    imports: [
        ...
        NG2DataTableModule
    ],
    ...
})
export class AppModule {

}
```

server pagination
```html
[mfIsServerPagination]="true"
```
UserComponent.html
```html
 <table class="table table-striped" [mfData]="data | dataFilter : filterQuery" #mf="mfDataTable" [mfRowsOnPage]="rowsOnPage"
                [(mfSortBy)]="sortBy" [(mfSortOrder)]="sortOrder" [mfActivePage]="activePage" (mfOnPageChange)="onPageChange($event)"
                [mfIsServerPagination]="true" [(mfAmountOfRows)]="itemsTotal" (mfSortOrderChange)="onSortOrder($event)">
                <thead>
                <tr>
                    <th style="width: 10%"></th>
                    <th style="width: 20%">
                        <mfDefaultSorter by="name">Name</mfDefaultSorter>
                    </th>
                    <th style="width: 40%">
                        <mfDefaultSorter by="email">Email</mfDefaultSorter>
                    </th>
                    <th style="width: 10%">
                        <mfDefaultSorter by="age">Age</mfDefaultSorter>
                    </th>
                    <th style="width: 20%">
                        <mfDefaultSorter [by]="sortByWordLength">City</mfDefaultSorter>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr *ngFor="let item of mf.data">
                    <td>
                        <button (click)="remove(item)" class="btn btn-danger">x</button>
                    </td>
                    <td>{{item.name}}</td>
                    <td>{{item.email}}</td>
                    <td class="text-right">{{item.age}}</td>
                    <td>{{item.city | uppercase}}</td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <td colspan="5">
                        <mfBootstrapPaginator [rowsOnPageSet]="[5,10,15]"></mfBootstrapPaginator>
                    </td>
                </tr>
                </tfoot>
            </table>
```

UserComponent.ts
```typescript

ngOnInit(): void {
        this.loadData();
    }

    public loadData() {
        this.http.get("/app/data.json")
            .subscribe((data) => {
                setTimeout(() => {

                    this.data = _.orderBy(data.json(), this.sortBy, [this.sortOrder]);
                    this.data = _.slice(this.data, (this.activePage-1)*this.rowsOnPage, (this.activePage-1)*this.rowsOnPage + this.rowsOnPage);
                    this.itemsTotal = data.json().length;
                }, 2000);
            });
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

    public remove(item) {
        let index = this.data.indexOf(item);
        if (index > -1) {
            this.data.splice(index, 1);
        }
    }
    public onPageChange(event) {
        this.rowsOnPage = event.rowsOnPage;
        this.activePage = event.activePage;
        this.loadData();
    }

    public onSortOrder(event) {
        this.loadData();
    }


```

client pagination  user [angualr2-datatable](https://github.com/mariuszfoltak/angular2-datatable)
but you need 
```typescript
import {NG2DataTableModule} from "angular2-datatable-pagination";
```

## API

### `mfData` directive

 - selector: `table[mfData]`
 - exportAs: `mfDataTable`
 - inputs
   - `mfData: any[]` - array of data to display in table
   - `mfRowsOnPage: number` - number of rows should be displayed on page (default: 1000)
   - `mfActivePage: number` - page number (default: 1)
   - `mfSortBy: any` - sort by parameter
   - `mfSortOrder: string` - sort order parameter, "asc" or "desc"
   - `mfIsServerPagination: boolean` -default value false
 - outputs
   - `mfSortByChange: any` - sort by parameter
   - `mfSortOrderChange: any` - sort order parameter
   - `mfOnPageChange: any` - page change parameter(rowsOnPage,activePage)
 
### `mfDefaultSorter` component

 - selector: `mfDefaultSorter`
 - inputs
   - `by: any` - specify how to sort data (argument for lodash function [_.sortBy ](https://lodash.com/docs#sortBy))
 
### `mfBootstrapPaginator` component
Displays buttons for changing current page and number of displayed rows using bootstrap template (css for bootstrap is required). If array length is smaller than current displayed rows on page then it doesn't show button for changing page. If array length is smaller than min value rowsOnPage then it doesn't show any buttons.

 - selector: `mfBootstrapPaginator`
 - inputs
   - `rowsOnPageSet: number` - specify values for buttons to change number of diplayed rows