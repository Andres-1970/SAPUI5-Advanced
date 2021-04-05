// @ts-nocheck
// eslint-disable-next-line no-undef
sap.ui.define([
    "sap/ui/core/UIComponent",
    "ui5/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog",
    "sap/ui/Device"
],
    /**
 * @param {typeof sap.ui.core.UIComponent} UIComponent
 * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
 * @param {typeof sap.ui.Device} Device 
 */
    function (UIComponent, Models, ResourceModel, HelloDialog, Device) {

        return UIComponent.extend("ui5.SAPUI5.Component", {

            metadata: {
                manifest: "json"
            },
            init: function () {

                //call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                // set data model on the view
                this.setModel(Models.createRecipient());

                //set i18n model on the view
                //var i18nModel = new ResourceModel({ bundleName: "ui5.SAPUI5.i18n.i18n" });
                //this.setModel(i18nModel, "i18n");

                //set the device model
                this.setModel(Models.createDeviceModel(), "device");
                this._helloDialog = new HelloDialog(this.getRootControl());

                //Crear la vista basada en url/hash
                this.getRouter().initialize();
            },

            exit: function () {
                this._helloDialog.destroy();
                delete this._helloDialog;
            },
            openHelloDialog: function () {
                this._helloDialog.open();
            },

            getContentDensityClass : function() {
               if (!Device.support.touch) {
                   this._sContentDensityClass = "sapUiSizeCampact";
               } else {
                   this._sContentDensityClass = "sapUiSizeCozy";
               }
               return this._sContentDensityClass;
            }
        });
    });