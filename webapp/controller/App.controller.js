sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/christian/ui/location/CONST"
], function (Controller, CONST) {
	"use strict";

	return Controller.extend(CONST.namespace + ".controller.App", {

		onShowHello: function () {
			// eslint-disable-next-line no-alert
			alert("Hello World");
		}

	});
});