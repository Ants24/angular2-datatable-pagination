"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var NG2DataTable_1 = require("./NG2DataTable");
var NG2DefaultSorter_1 = require("./NG2DefaultSorter");
var NG2Paginator_1 = require("./NG2Paginator");
var NG2BootstrapPaginator_1 = require("./NG2BootstrapPaginator");
var NG2DataTableModule = (function () {
    function NG2DataTableModule() {
    }
    return NG2DataTableModule;
}());
NG2DataTableModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            NG2DataTable_1.NG2DataTable,
            NG2DefaultSorter_1.NG2DefaultSorter,
            NG2Paginator_1.NG2Paginator,
            NG2BootstrapPaginator_1.NG2BootstrapPaginator
        ],
        exports: [
            NG2DataTable_1.NG2DataTable,
            NG2DefaultSorter_1.NG2DefaultSorter,
            NG2Paginator_1.NG2Paginator,
            NG2BootstrapPaginator_1.NG2BootstrapPaginator
        ]
    })
], NG2DataTableModule);
exports.NG2DataTableModule = NG2DataTableModule;
//# sourceMappingURL=NG2DataTableModule.js.map