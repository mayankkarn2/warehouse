//@ui5-bundle com/techmartindia/warehouse/Component-preload.js
sap.ui.require.preload({
	"com/techmartindia/warehouse/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("com.techmartindia.warehouse.Component",{metadata:{manifest:"json"}})});
},
	"com/techmartindia/warehouse/i18n/i18n.properties":'# This is the resource bundle for com.techmartindia.warehouse\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=warehouse\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\n#XFLD,27\nflpTitle=Warehouse\n',
	"com/techmartindia/warehouse/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"com.techmartindia.warehouse","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.15.6","toolsId":"4f96e705-1092-470a-a145-ee934b25a663"},"dataSources":{"mainService":{"uri":"odata/v4/admin/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"warehouse-warehouse":{"semanticObject":"warehouse","action":"warehouse","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.130.2","libs":{"sap.m":{},"sap.ui.core":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.techmartindia.warehouse.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"WarehouseList","target":"WarehouseList"},{"pattern":"Warehouse({key}):?query:","name":"WarehouseObjectPage","target":"WarehouseObjectPage"}],"targets":{"WarehouseList":{"type":"Component","id":"WarehouseList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Warehouse","variantManagement":"Page","navigation":{"Warehouse":{"detail":{"route":"WarehouseObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"WarehouseObjectPage":{"type":"Component","id":"WarehouseObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Warehouse"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"techmartwarehouse"}}'
});
//# sourceMappingURL=Component-preload.js.map