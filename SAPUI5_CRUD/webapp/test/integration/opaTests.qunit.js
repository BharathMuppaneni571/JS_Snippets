/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"namespace/CRUD20191221/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});