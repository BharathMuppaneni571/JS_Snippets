function initModel() {
	var sUrl = "/northwind/V2/(S(vdge2rnxxp4snz22sz5qiykk))/OData/OData.svc/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}