sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";return e.extend("student.ext.controller.List",{override:{onInit:function(){var e=this.base.getExtensionAPI().getModel()},editFlow:{onBeforeCreate:function(){}},routing:{onAfterBinding:function(){debugger;sap.ui.getCore().byId("student::studList--fe::table::stud::LineItem-innerTable").mAggregations.columns[2].setHAlign("End")}}}})});