sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/Dialog",
	"sap/m/Image"
], function (Controller,Dialog,Image) {
	"use strict";

	return Controller.extend("Image.Imageover.controller.View1", {
		onInit: function () {

		},
		onClick: function ()
		{
			var oDialog = new sap.m.Dialog({
				stretch: sap.ui.Device.system.phone,
				customHeader: new sap.m.Bar({
					contentLeft: new sap.m.Label({
						text: "Herd of Elephants"
					}),
					contentRight: new sap.m.Button({
						icon: "sap-icon://decline",
						press: function () {
							oDialog.close();
						}
					})
				}),
				verticalScrolling: true,
				horizontalScrolling: true,
				content: [
					new sap.m.Image({
						src: "test-resources/sap/ui/documentation/sdk/images/nature/ALotOfElephants_small.jpg"
					})
				]
			});
			oDialog.open();
		}

	});
});