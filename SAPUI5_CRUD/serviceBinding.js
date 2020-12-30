function initModel() {
	var sUrl = "/northwind/V2/(S(ws3f4ioul3yiqbrwuordp5zx))/OData/OData.svc/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}