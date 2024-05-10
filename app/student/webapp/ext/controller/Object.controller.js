sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('student.ext.controller.Object', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf student.ext.controller.Object
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},
			routing:{
				onAfterBinding:function(){debugger
					// sap.ui.getCore().byId("CreateDialog::stud").close()
					// let drafttable = SELECT.from('DRAFT_DRAFTADMINISTRATIVEDATA');
					//         var now = new Date();
					//         var randomNum = '';
					//         randomNum += Math.round(Math.random() * 9);
					//         randomNum += Math.round(Math.random() * 9);
					//         randomNum += now.getTime().toString().slice(-3);
					
					//         const roleData = {
							  
					//             sid: randomNum,
					//             DRAFTADMINISTRATIVEDATA_DRAFTUUID: drafttable[drafttable.length - 1].DRAFTUUID
					//         };
					
					//         cds.transaction(req).run(
					//             INSERT.into(stud.drafts).entries(roleData)
					//         );
					
					    
					
					// sap.ui.getCore().byId("student::studList--fe::table::stud::LineItem::Table").mAggregations.content.getColumns()[0].setHAlign('End')  

					}
				},
				editFlow:{
					onBeforeSave:function(){
						debugger
						// sap.ui.getCore().byId('CreateDialog::stud').attachAfterOpen(function(oEvent){
						// 	debugger
					// });
					}
				},
			

		}
	});
});
