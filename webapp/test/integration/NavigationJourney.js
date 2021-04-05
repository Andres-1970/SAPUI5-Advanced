// @ts-nocheck
/* eslint-disable no-undef */
sap.ui.define([
    "ui5/SAPUI5/localService/mockserver",
    "sap/ui/test/opaQunit",
    "./pages/HelloPanel"
],
    /**
    * @param {typeof sap.ui.test.opaQUnit} opaQUnit
    */
    function (mockserver, opaQunit, HelloPanel) {
        QUnit.module("Navigation"); 
        opaQunit("Should open the Hello Dialog", function (Given, When, Then) {
            //initialize the mock server
            mockserver.init();
            //Arrangements
            Given.iStartMyUIComponent({
                componentConfig: {
                    name: "ui5.SAPUI5"
                }
            });
            //Actions
            When.onTheAppPage.iSayHelloDialogButton();
            //Assertions
            Then.onTheAppPage.iSeeTheHelloDialog();
            //Cleanup
            Then.iTeardownMyApp();
        });
    });