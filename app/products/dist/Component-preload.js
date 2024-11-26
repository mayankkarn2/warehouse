//@ui5-bundle com/techmartindia/products/Component-preload.js
sap.ui.require.preload({
	"com/techmartindia/products/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("com.techmartindia.products.Component",{metadata:{manifest:"json"}})});
},
	"com/techmartindia/products/i18n/i18n.properties":'# This is the resource bundle for com.techmartindia.products\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Product\n\n#YDES: Application description\nappDescription=Product\n\n#XFLD,24\nflpTitle=Products\n',
	"com/techmartindia/products/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"com.techmartindia.products","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.15.5","toolsId":"aee0868f-cdd2-4fd5-8885-8b32f53b78f8"},"dataSources":{"mainService":{"uri":"odata/v4/admin/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"product-product":{"semanticObject":"product","action":"product","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.130.2","libs":{"sap.m":{},"sap.ui.core":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.techmartindia.products.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"ProductList","target":"ProductList"},{"pattern":"Product({key}):?query:","name":"ProductObjectPage","target":"ProductObjectPage"}],"targets":{"ProductList":{"type":"Component","id":"ProductList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Product","variantManagement":"Page","navigation":{"Product":{"detail":{"route":"ProductObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"ProductObjectPage":{"type":"Component","id":"ProductObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Product"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"techmartwarehouse"}}'
});
//# sourceMappingURL=Component-preload.js.map