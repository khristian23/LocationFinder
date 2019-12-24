sap.ui.define([
	"sap/ui/core/UIComponent",
	"com/christian/ui/location/const"
], function (UIComponent, CONST) {
	"use strict";

	return UIComponent.extend(CONST.namespace + ".Component", {

		metadata: {
			manifest: "json"
		},

		init: function () {
			UIComponent.prototype.init.apply(this, arguments);
		}
	});
});