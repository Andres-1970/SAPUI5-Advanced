// @ts-nocheck
// eslint-disable-next-line no-undef
sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment",
    "sap/ui/core/syncStyleClass"
],
    /**
    * @param {typeof sap.ui.core.mvc.Controller} Controller
    * @param {typeof sap.ui.core.Fragment} Fragment
    * @param {typeof sap.ui.core.syncStyleClass} syncStyleClass
    */

    function (ManagedObject, Fragment, syncStyleClass) {
        "use strict";
        return ManagedObject.extend("ui5.SAPUI5.controller.HelloDialog", {
            constructor: function (oView) {
                this._oView = oView;
            },
            exit: function () {
                delete this._oView;
            },
            open: function () {
                const oView = this._oView;
                // create dialog lazily
                if (!oView.byId("helloDialog")) {

                    let oFragmentController = {
                        onCloseDialog: function () {
                            oView.byId("helloDialog").close();
                        }
                    };
                    // load asynchronous XML fragment
                    Fragment.load({
                        id: oView.getId(),
                        name: "ui5.SAPUI5.view.HelloDialog",
                        controller: oFragmentController
                    }).then(function (oDialog) {
                        // connect dialog to the root view
                        oView.addDependent(oDialog);
                        syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(),oView, oDialog);
                        oDialog.open();
                    });
                } else {
                    oView.byId("helloDialog").open();
                }
            }
        });
    });