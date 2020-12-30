sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox) {
	"use strict";
	return Controller.extend("namespace.SAPUI5_CRUD.controller.View1", {
		onInit: function () {},

		onCreate: function (oEvent) {
			var oModel = this.getView().getModel();
			var releaseDate = new Date(this.getView().byId("input1").getValue());

			// var finalReleaseDate = (releaseDate.getFullYear().toString() + "-" + ("0" + (releaseDate.getMonth() + 1)).slice(-2).toString() +
			// 	"-" + ("0" + (releaseDate.getUTCDate() + 1)).slice(-2)).toString() + "T00:00:00";
			var finalReleaseDate = sap.ui.model.odata.ODataUtils.formatValue(releaseDate, "Edm.DateTime").split("'")[1];
			var discontinuedDate = new Date(this.getView().byId("input2").getValue());
			// var finalDiscontinuedDate = (discontinuedDate.getFullYear().toString() + "-" + ("0" + (discontinuedDate.getMonth() + 1)).slice(-2).toString() +
			// 	"-" + ("0" + (discontinuedDate.getUTCDate() + 1)).slice(-2)).toString() + "T00:00:00";
			var finalDiscontinuedDate = sap.ui.model.odata.ODataUtils.formatValue(discontinuedDate, "Edm.DateTime").split("'")[1];
			var payload = {
				"ID": parseInt(this.getView().byId("input0").getValue()),
				"ReleaseDate": finalReleaseDate,
				"DiscontinuedDate": finalDiscontinuedDate,
				"Rating": this.getView().byId("input3").getValue(),
				"Price": parseInt(this.getView().byId("input4").getValue()).toFixed(2)
			};
			oModel.create("/Products", payload, {
				success: function (data, response) {
					MessageBox.success("Entry Created Succesfully");
				},
				error: function (error) {
					MessageBox.error("Error: " + error.statusText);
				}
			});

		},

		onGet: function (oEvent) {
			var id = this.getView().byId("input113").getValue();
			var oModel = this.getView().getModel();
			var that = this;
			oModel.read("/Products(ID=" + id + ")", {
				success: function (odata, response) {
					that.getView().byId("input115").setValue(odata.ReleaseDate);
					that.getView().byId("input117").setValue(odata.DiscontinuedDate);
					that.getView().byId("input119").setValue(odata.Rating);
					that.getView().byId("input1111").setValue(odata.Price);
				},
				error: function (error) {
					MessageBox.error("Error: " + error.statusText);
				}
			});
		},
		onFetch: function (oEvent) {
			var id = this.getView().byId("input223").getValue();
			var oModel = this.getView().getModel();
			var that = this;
			oModel.read("/Products(ID=" + id + ")", {
				success: function (odata, response) {
					that.getView().byId("input225").setDate(odata.ReleaseDate);
					that.getView().byId("input227").setDate(odata.DiscontinuedDate);
					that.getView().byId("input229").setValue(odata.Rating);
					that.getView().byId("input2211").setValue(odata.Price);
				},
				error: function (error) {
					MessageBox.error("Error: " + error.statusText);
				}
			});
		},
		onUpdate: function (oEvent) {
			var oModel = this.getView().getModel();
			var releaseDate = new Date(this.getView().byId("input225").getValue());
			var finalReleaseDate = (releaseDate.getFullYear().toString() + "-" + ("0" + (releaseDate.getMonth() + 1)).slice(-2).toString() +
				"-" + ("0" + (releaseDate.getUTCDate() + 1)).slice(-2)).toString() + "T00:00:00";
			var discontinuedDate = new Date(this.getView().byId("input227").getValue());
			var finalDiscontinuedDate = (discontinuedDate.getFullYear().toString() + "-" + ("0" + (discontinuedDate.getMonth() + 1)).slice(-2).toString() +
				"-" + ("0" + (discontinuedDate.getUTCDate() + 1)).slice(-2)).toString() + "T00:00:00";
			var payload = {
				"ID": parseInt(this.getView().byId("input223").getValue()),
				"ReleaseDate": finalReleaseDate,
				"DiscontinuedDate": finalDiscontinuedDate,
				"Rating": this.getView().byId("input229").getValue(),
				"Price": parseInt(this.getView().byId("input2211").getValue())
			};
			oModel.update("/Products", payload, {
				success: function (data, response) {
					MessageBox.success("Entry Updated Succesfully");
				},
				error: function (error) {
					MessageBox.error("Error: " + error.statusText);
				}
			});
		},

		onDelete: function (oEvent) {
			var id = this.getView().byId("input333").getValue();
			var oModel = this.getView().getModel();
			oModel.remove("/Products(ID=" + id + ")", {
				success: function (data, response) {
					MessageBox.success("Entry Deleted Succesfully");
				},
				error: function (error) {
					MessageBox.error("Error: " + error.statusText);
				}
			});
		}
	});
});