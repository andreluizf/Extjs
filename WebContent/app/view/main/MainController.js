/**
 * This class is the main view for the application. It is specified in app.js as
 * the "autoCreateViewport" property. That setting automatically applies the
 * "viewport" plugin to promote that instance of this class to the body element.
 * 
 * TODO - Replace this content of this view to suite the needs of your
 * application.
 */
Ext.define('MyApp.view.main.MainController', {
	extend : 'Ext.app.ViewController',

	requires : ['Ext.MessageBox'],

	alias : 'controller.main',
	counter : 4,

	onAddTabClick : function() {
		var tabPanel = Ext.getCmp('tabs'), 
		counter = ++this.counter,
            html = counter % 2 ? "ola" :
               "ali",
            tab = tabPanel.add({
                title: 'Tab ' + counter,
                html: html
            });

        tabPanel.setActiveTab(tab);
	},

	onClickButton : function() {
		Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
	},

	onConfirm : function(choice) {
		if (choice === 'yes') {
			//
		}
	}
});
