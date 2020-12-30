/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"namespace/CRUD20191221/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});