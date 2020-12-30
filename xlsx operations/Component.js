sap.ui.define(['sap/ui/core/UIComponent'],
	function(UIComponent) {
	"use strict";

	var Component = UIComponent.extend("sap.m.sample.UploadCollectionForPendingUpload.Component", {

		metadata : {
			manifest: "json",
			"includes": [
				"lib/xlsx_full_min.js"
			]
		}
	});

	return Component;

});
