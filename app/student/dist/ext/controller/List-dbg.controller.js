sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('student.ext.controller.List', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf student.ext.controller.List
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},
			editFlow:{
				onBeforeCreate:function(){
					// debugger
					// sap.ui.getCore().byId('CreateDialog::stud').attachAfterOpen(function(oEvent){
					// 	debugger
				// });
				}
			},
			routing:{
				onAfterBinding:function(){debugger
					// sap.ui.getCore().byId("CreateDialog::stud").close()
					
					// sap.ui.getCore().byId("student::studList--fe::table::stud::LineItem::Table").mAggregations.content.getColumns()[0].setHAlign('End')  
					sap.ui.getCore().byId("student::studList--fe::table::stud::LineItem-innerTable").mAggregations.columns[2].setHAlign('End')
					}
				}
			}
		
	});
});
