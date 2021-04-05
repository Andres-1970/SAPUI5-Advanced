// @ts-nocheck
// eslint-disable-next-line no-undef
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
    * @param {typeof sap.ui.core.mvc.Controller} Controller
    */
    function (Controller) {
        "use strict";
        return Controller.extend("ui5.SAPUI5.controller.App", {
            onInit: function () {
                this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
            },
            onOpenDialogHeader: function () {
                this.getOwnerComponent().openHelloDialog();
            }
        });
    });