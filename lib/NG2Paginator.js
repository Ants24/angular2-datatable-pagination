"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var NG2DataTable_1 = require("./NG2DataTable");
var NG2Paginator = (function () {
    function NG2Paginator(injectMfTable) {
        var _this = this;
        this.injectMfTable = injectMfTable;
        this.dataLength = 0;
        this.onPageChangeSubscriber = function (event) {
            _this.activePage = event.activePage;
            _this.rowsOnPage = event.rowsOnPage;
            _this.dataLength = event.dataLength;
            _this.lastPage = Math.ceil(_this.dataLength / _this.rowsOnPage);
        };
    }
    NG2Paginator.prototype.ngOnChanges = function (changes) {
        this.mfTable = this.inputMfTable || this.injectMfTable;
        this.onPageChangeSubscriber(this.mfTable.getPage());
        this.mfTable.onPageChange.subscribe(this.onPageChangeSubscriber);
    };
    NG2Paginator.prototype.setPage = function (pageNumber) {
        this.mfTable.setPage(pageNumber, this.rowsOnPage);
    };
    NG2Paginator.prototype.setRowsOnPage = function (rowsOnPage) {
        this.mfTable.setPage(this.activePage, rowsOnPage);
    };
    return NG2Paginator;
}());
__decorate([
    core_1.Input("mfTable"),
    __metadata("design:type", NG2DataTable_1.NG2DataTable)
], NG2Paginator.prototype, "inputMfTable", void 0);
NG2Paginator = __decorate([
    core_1.Component({
        selector: "mfPaginator",
        template: "<ng-content></ng-content>"
    }),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [NG2DataTable_1.NG2DataTable])
], NG2Paginator);
exports.NG2Paginator = NG2Paginator;
//# sourceMappingURL=NG2Paginator.js.map