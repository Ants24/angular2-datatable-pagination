var dataTable_directive = require('./lib/NG2DataTable');
var defaultSorter_directive = require('./lib/NG2DefaultSorter');
var paginator_component = require('./lib/NG2Paginator');
var bootstrapPaginator_component = require('./lib/NG2BootstrapPaginator');
var dataTable_module = require('./lib/NG2DataTableModule');

exports.NG2DataTable = dataTable_directive.NG2DataTable;
exports.NG2DataEvent = dataTable_directive.DataEvent;
exports.PageEvent = dataTable_directive.PageEvent;
exports.SortEvent = dataTable_directive.SortEvent;
exports.NG2DefaultSorter = defaultSorter_directive.NG2DefaultSorter;
exports.NG2Paginator = paginator_component.NG2Paginator;
exports.NG2BootstrapPaginator = bootstrapPaginator_component.NG2BootstrapPaginator;
exports.NG2DataTableModule = dataTable_module.NG2DataTableModule;